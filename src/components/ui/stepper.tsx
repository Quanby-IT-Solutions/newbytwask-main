import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Utility function for conditional class names

// Types for components that use children
interface StepperComponentProps {
  className?: string;
  children: ReactNode;
  currentStep?: number; 
}

// Types for state-based components
interface StepperStateComponentProps extends StepperComponentProps {
  state: 'disabled' | 'active' | 'completed';
  step?: number;
}

// Stepper Root
const Stepper: FC<StepperComponentProps> = ({ className, children, currentStep = 1  }) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {React.Children.map(children, (child, index) => {
        const stepNumber = index + 1;
        let state: 'disabled' | 'active' | 'completed' = 'disabled';

        if (stepNumber < currentStep) {
          state = 'completed';
        } else if (stepNumber === currentStep) {
          state = 'active';
        }

        // Clone element and pass down required props
        return React.cloneElement(child as React.ReactElement<StepperStateComponentProps>, {
          state,
          currentStep, // Pass down the currentStep prop
        });
      })}
    </div>
  );
};

// Stepper Description
const StepperDescription: FC<StepperComponentProps> = ({ className, children }) => {
  return (
    <p className={cn('text-xs text-muted-foreground', className)}>
      {children}
    </p>
  );
};

// Stepper Indicator
const StepperIndicator: FC<StepperStateComponentProps> = ({ state, className, children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-10 h-10',
        state === 'disabled' && 'opacity-50 text-muted-foreground',
        state === 'active' && 'bg-primary text-primary-foreground',
        state === 'completed' && 'bg-accent text-accent-foreground',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// Stepper Item
const StepperItem: FC<StepperStateComponentProps> = ({ state, className, children }) => {
  return (
    <div className={cn('flex items-center gap-2 group', state === 'disabled' && 'pointer-events-none', className)}>
      {children}
    </div>
  );
};

// Stepper Separator
const StepperSeparator: FC<StepperStateComponentProps> = ({ state, className }) => {
  return (
    <div
      className={cn(
        'bg-muted h-[2px] w-full',
        state === 'disabled' && 'opacity-50',
        state === 'completed' && 'bg-accent-foreground',
        className
      )}
    />
  );
};

// Stepper Title
const StepperTitle: FC<StepperComponentProps> = ({ className, children }) => {
  return (
    <h3 className={cn('text-md font-semibold whitespace-nowrap', className)}>
      {children}
    </h3>
  );
};

interface StepperTriggerProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
  asChild?: boolean; // Allow asChild prop
}

// Stepper Trigger
const StepperTrigger: FC<StepperTriggerProps> = ({ onClick, className, children, asChild }) => {
  const triggerElement = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn('p-2 flex flex-col items-center text-center gap-2 rounded-md', className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  // If asChild is true, return children instead of the button
  return asChild ? (
    <>{React.cloneElement(children as React.ReactElement, { onClick })}</>
  ) : (
    triggerElement
  );
};

// Export all components for use
export {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
};
