import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ setLoading }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, [setLoading]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="counter-container">
                <motion.span
                    className="counter"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}%
                </motion.span>
            </div>
            <motion.div
                className="curtain"
                initial={{ height: "100%" }}
                exit={{ height: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
            />
        </motion.div>
    );
};

export default Preloader;
