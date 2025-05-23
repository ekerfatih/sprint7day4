import React, { useEffect } from 'react';

const BubbleBackground = () => {
    useEffect(() => {
        const container = document.querySelector('.bubble-container');

        function createBubble() {
            const bubble = document.createElement('div');
            const size = Math.random() * 100 + 10;
            const left = Math.random() * 100;
            const duration = Math.random() * 8 + 4;
            const delay = Math.random() * 5;

            bubble.className = 'bubble';
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.animationDelay = `${delay}s`;

            container.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, (duration + delay) * 1000);
        }

        const interval = setInterval(createBubble, 500);
        return () => clearInterval(interval); // cleanup
    }, []);

    return <div className="bubble-container"></div>;
};

export default BubbleBackground;
