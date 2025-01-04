import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Navbar() {
      return (
        <nav className="bg-deckbros-primary p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              DeckBros
            </Link>
            <div className="space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      )
    }
