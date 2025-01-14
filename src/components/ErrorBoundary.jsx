import React from 'react'

    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = { hasError: false }
      }

      static getDerivedStateFromError(error) {
        return { hasError: true }
      }

      componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
      }

      render() {
        if (this.state.hasError) {
          return (
            <div className="min-h-screen flex items-center justify-center bg-red-50">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                <p className="text-gray-700">
                  We're sorry for the inconvenience. Please try refreshing the page.
                </p>
              </div>
            </div>
          )
        }

        return this.props.children
      }
    }

    export default ErrorBoundary
