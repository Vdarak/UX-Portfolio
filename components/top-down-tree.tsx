"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Here we define our TreeNode interface, ensuring strict typing for our graph data.
// This is the contract for each node in our hierarchical structure.
interface TreeNode {
  id: string;
  label:string;
  type: 'root' | 'folder' | 'file';
  children?: TreeNode[];
}

interface TopDownTreeProps {
  data: TreeNode;
}

// The Node component is a recursive building block for our tree.
// Notice the use of framer-motion to add subtle, delightful animations
// that guide the user's understanding of the hierarchy.
const Node = ({ node }: { node: TreeNode }) => {
  const [isOpen, setIsOpen] = useState(node.type === 'root');
  const isFolder = node.children && node.children.length > 0;

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <motion.li 
      className="relative pl-8 before:absolute before:left-3 before:top-[22px] before:h-[calc(100%-22px)] before:w-px before:bg-muted-foreground/10 last:before:hidden"
      layout="position"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute left-3 top-[22px] h-px w-4 bg-muted-foreground/10"></div>
      
      <div 
        className={`flex items-center gap-2 py-2 rounded-md transition-colors ${isFolder ? 'cursor-pointer hover:bg-muted/50' : ''}`}
        onClick={handleToggle}
      >
        {isFolder ? (
          <>
            <motion.div
              variants={iconVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400/80">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-[22px] text-purple-400/80">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        )}
        <span className="text-sm font-mono text-muted-foreground">{node.label}</span>
      </div>

      <AnimatePresence>
        {isFolder && isOpen && (
          <motion.ul 
            className="pl-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {node.children?.map(child => <Node key={child.id} node={child} />)}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

// This is our primary component for the top-down tree view.
// It sets up the main container and kicks off the recursive rendering.
const TopDownTree = ({ data }: TopDownTreeProps) => {
  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-xl border border-border/20 p-4 md:p-6">
      <ul>
        <Node node={data} />
      </ul>
    </div>
  );
};

export default TopDownTree;
