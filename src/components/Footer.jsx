import React from 'react'

    export default function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">DeckBros</h3>
                <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved</p>
              </div>
              <div className="flex space-x-4">
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/services" className="hover:text-gray-400">Services</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      )
    }
