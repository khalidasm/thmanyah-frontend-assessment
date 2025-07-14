import LoadingSpinner from './LoadingSpinner';

interface QueryLoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const QueryLoadingState = ({ 
  isLoading, 
  children, 
  fallback = <LoadingSpinner /> 
}: QueryLoadingStateProps) => {
  if (isLoading) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
} 

export default QueryLoadingState;