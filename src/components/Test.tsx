import { useEffect, useRef, useState } from "react";
import { Container, Sprite, Stage, Text } from "@pixi/react";
import * as PIXI from "pixi.js";

export default function Test() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

    const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const textStyle = {
        fill: "white",
        align: 'center'
        
    } as Partial<PIXI.ITextStyle>;

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
            <Stage width={dimensions.width} height={dimensions.height}>
                <Sprite image={bunnyUrl} x={300} y={150} />
                <Sprite image={bunnyUrl} x={500} y={150} />
                <Sprite image={bunnyUrl} x={400} y={200} />
    
                <Container>
                    <Text
                        text="Hello World"
                        anchor={0.5}
                        x={220}
                        y={150}
                        style={textStyle}
                    />
                </Container>
            </Stage>
        </div>
    );
}
