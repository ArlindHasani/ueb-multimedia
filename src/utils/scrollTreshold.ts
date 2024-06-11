
import { 
    useEffect, 
    useState 
} from "react";

export const scrollTreshold = (threshold: number, defaultState: boolean) => {

    const [show, setShow] = useState<boolean>(defaultState);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setShow(!defaultState);
            } else {
                setShow(defaultState);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return show;
    
};