import { useEffect, useRef, useState } from "react";
import { Stage, Text } from "@pixi/react";
import * as PIXI from "pixi.js";

const Message: React.FC<{ poem: string; interval?: number; children: (text: string) => JSX.Element }> = ({ poem, interval = 100, children }) => {
    const poemChars = () => poem.split("").concat([...Array(10)].map(() => ''));

    const [state, setState] = useState(() => ({
        text: '',
        rest: poemChars()
    }));

    useEffect(() => {
        setState({ text: '', rest: poemChars() });
    }, [poem]);

    useEffect(() => {
        const update = () => {
            setState(({ text, rest }) => {
                if (rest.length === 0) {
                    return { text: '', rest: poemChars() };
                }
                const line = text + (rest.shift() || '');
                return { text: line, rest };
            });
        };

        const i = setInterval(update, interval);
        return () => {
            clearInterval(i);
        };
    }, [interval, poem]);

    return children(state.text);
};

const PixiJsText: React.FC<{ poem: string }> = ({ poem }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 200, height: 100 });

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
        align: 'center',
        fontFamily: '"Poppins", sans-serif',
        wordWrap: true,
        wordWrapWidth: dimensions.width - 20,
    } as Partial<PIXI.ITextStyle>;

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
            <Stage width={dimensions.width} height={dimensions.height}>
                <Message poem={poem} interval={100}>
                    {(text) => (
                        <Text
                            text={text}
                            anchor={0.5}
                            x={dimensions.width / 2}
                            y={dimensions.height / 2}
                            style={textStyle}
                        />
                    )}
                </Message>
            </Stage>
        </div>
    );
};

export default PixiJsText;
