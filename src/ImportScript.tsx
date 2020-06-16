import { useEffect } from 'react';

const ImportScript = (resourceUrl: string, callback: Function) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = resourceUrl;
        // script.async = true;
        function callMapCallback(e: Event) {
            callback();
        }

        script.addEventListener('load', callMapCallback, false);
        
        document.querySelector('head')?.appendChild(script);
        // document.head.appendChild(script);
        return () => {
            script.removeEventListener('load', callMapCallback, false);
            // document.querySelector('head')?.removeChild(script);
        }
    }, [resourceUrl]);
};
export default ImportScript;