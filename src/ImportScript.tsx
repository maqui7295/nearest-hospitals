import { useEffect } from 'react';

const useImportScript = (resourceUrl: string, callback: Function) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = resourceUrl;
        // script.async = true;

        script.onload = () => callback();
        
        document.querySelector('head')?.appendChild(script);
        // document.head.appendChild(script);
        return () => {
            document.querySelector('head')?.removeChild(script);
        }
    }, [resourceUrl, callback]);
};
export default useImportScript;