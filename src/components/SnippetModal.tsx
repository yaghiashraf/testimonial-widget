import React, { useState } from 'react'
import { WidgetConfig } from '../types'
import { generateSnippet } from '../lib/generateSnippet'

interface SnippetModalProps {
  config: WidgetConfig
  onClose: () => void
}

/**
 * Modal component that displays the generated widget code snippet
 */
const SnippetModal: React.FC<SnippetModalProps> = ({ config, onClose }) => {
  const [copied, setCopied] = useState(false)
  const snippet = generateSnippet(config)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = snippet
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const estimatedSize = Math.round((snippet.length / 1024) * 10) / 10

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h2 className="text-xl font-semibold">Your Widget Code</h2>
            <p className="text-gray-400 text-sm mt-1">
              Copy and paste this code into your website (~{estimatedSize} KB)
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div className="flex justify-between items-center p-3 bg-gray-800 border-b border-gray-700">
              <span className="text-sm text-gray-400 font-mono">HTML + CSS + JS</span>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                  copied
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {copied ? '✓ Copied!' : 'Copy Code'}
              </button>
            </div>
            
            <div className="p-4 overflow-auto max-h-96">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap break-all">
                <code>{snippet}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">How to use:</h3>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>1. Copy the code above</li>
              <li>2. Paste it anywhere in your website's HTML</li>
              <li>3. The widget will automatically appear and work!</li>
            </ul>
          </div>
          
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-gray-300 mb-2">Features included:</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Fully responsive design</li>
              <li>• Auto-rotating testimonials (4-second intervals)</li>
              <li>• Touch/swipe support on mobile</li>
              <li>• Keyboard navigation (arrow keys)</li>
              <li>• WCAG accessibility compliant</li>
              <li>• No external dependencies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnippetModal