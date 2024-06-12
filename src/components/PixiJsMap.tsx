import { useEffect, useRef } from "react";
import { Application, Assets, Container, Sprite} from "pixi.js";

export default function PixiJsMap() {
  const pixiContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new Application();

    const initializePixiApp = async () => {
      await app.init({
        backgroundColor: 0x8B4513,
        resizeTo: window,
      });

      const treeTexture = await Assets.load(`https://pixijs.com/assets/tree.png`);
      const signTextures = {
        newGames: await Assets.load(`./assets/new-sign.webp`),
        onSale: await Assets.load(`./assets/sale-sign.webp`),
        upcoming: await Assets.load(`./assets/coming-sign.webp`),
      };

      const worldSize = 5000;

      const worldContainer = new Container({
        isRenderGroup: true,
      });

      for (let i = 0; i < 100000; i++) {
        const yPos = Math.random() * worldSize;

        const tree = new Sprite(treeTexture);
        tree.x = Math.random() * worldSize;
        tree.y = yPos;
        tree.scale.set(0.25);
        tree.anchor.set(0.5);

        worldContainer.addChild(tree);
      }

      worldContainer.children.sort((a, b) => a.position.y - b.position.y);

      worldContainer.x = (app.renderer.width - worldSize) / 2 -50;
      worldContainer.y = (app.renderer.height - worldSize) / 2 - 50;

      const centerX = worldSize / 2;
      const centerY = worldSize / 2;
      const offset = 150;

      const signs = [
        { text: "New Games", x: centerX, y: centerY - offset, linkTo: 'new-games', texture: signTextures.newGames },
        { text: "On Sale Games", x: centerX + offset, y: centerY, linkTo: 'on-sale-games', texture: signTextures.onSale },
        { text: "Upcoming Games", x: centerX - offset, y: centerY, linkTo: 'upcoming-games', texture: signTextures.upcoming },
      ];

      const onClick = (linkTo: string) => {
        window.location.href = (`/${linkTo}`);
      }

      signs.forEach(sign => {
        const signSprite = new Sprite(sign.texture);
        signSprite.eventMode = 'static';
        signSprite.cursor = 'pointer';
        signSprite.on('pointerdown', () => onClick(sign.linkTo));

        signSprite.x = sign.x;
        signSprite.y = sign.y;

        signSprite.scale.set(0.1);
        signSprite.anchor.set(0.5);
        signSprite.zIndex = 10;

        worldContainer.addChild(signSprite);
      });

      worldContainer.sortableChildren = true;

      app.stage.addChild(worldContainer);

      if (pixiContainerRef.current) {
        pixiContainerRef.current.appendChild(app.view);
      }

      let isDragging = false;
      let startX = 0;
      let startY = 0;

      app.view.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
          isDragging = true;
          startX = e.clientX;
          startY = e.clientY;
        }
      });

      app.view.addEventListener('mouseup', () => {
        isDragging = false;
      });

      app.view.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          worldContainer.x += dx;
          worldContainer.y += dy;
          startX = e.clientX;
          startY = e.clientY;

          const minX = app.renderer.width - worldSize * worldContainer.scale.x;
          const minY = app.renderer.height - worldSize * worldContainer.scale.y;
          worldContainer.x = Math.max(minX, Math.min(0, worldContainer.x));
          worldContainer.y = Math.max(minY, Math.min(0, worldContainer.y));
        }
      });

    };

    initializePixiApp();

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div ref={pixiContainerRef} className="overflow-hidden h-[650px] rounded-xl mx-16">

    </div>
  );
}
