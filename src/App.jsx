import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="futuristic-wrapper">
            {/* Glowing & Rotating Ring */}
            <motion.div
                className="orbit-ring"
                animate={{ rotate: [0, 360] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            />

            {/* Glow Grid */}
            <div className="glow-grid"></div>

            {/* Login Form */}
            <motion.div
                className="glass-form"
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Portal Login Access
                </motion.h2>

                <input type="text" placeholder="Username Or Email" />
                <input type="password" placeholder="Password" />

                <motion.button
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#0ff",
                        boxShadow: "0 0 25px #0ff, 0 0 50px #0ff",
                    }}
                >
                    Initiate Verification
                </motion.button>

                {/* Futuristic Swap Text */}
                <div
                    className="swap-text-wrapper"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        {!hovered ? (
                            <motion.div
                                key="not-registered"
                                className="swap-text futuristic-glow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1], // smooth cubic bezier
                                }}
                            >
                                Not Registered?
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sign-up"
                                className="swap-text futuristic-glow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                            >
                                Sign Up Here
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

export default App;
