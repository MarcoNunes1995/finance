import React from 'react';

interface State { hasError: boolean }

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props:any){ super(props); this.state = { hasError: false } }
  static getDerivedStateFromError(){ return { hasError: true } }
  componentDidCatch(error:any, info:any){ console.error('ErrorBoundary', error, info) }
  render(){
    if(this.state.hasError) return (
      <div className="p-6 text-center text-red-600">Algo deu errado. Recarregue a página.</div>
    )
    return this.props.children;
  }
}
