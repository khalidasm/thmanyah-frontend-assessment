"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner = ({
    message = "Loading...",
}: LoadingSpinnerProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center py-12"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mb-4"
            >
                <Loader2 className="h-12 w-12 text-secondary" />
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-secondary font-medium"
            >
                {message}
            </motion.p>
        </motion.div>
    );
}

export default LoadingSpinner;