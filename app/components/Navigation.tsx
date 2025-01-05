'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isResultsOpen, setIsResultsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-yellow-400/80 backdrop-blur-sm z-50 border-b border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/philosophy" className="text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium">
              Philosophy
            </Link>
            <Link href="/services" className="text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium">
              Services
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsResultsOpen(!isResultsOpen)}
                className="flex items-center text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium"
              >
                Results
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResultsOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2">
                  <Link href="/results/elementary" className="block px-4 py-2 text-sm text-yellow-950 hover:bg-yellow-50">
                    Elementary School
                  </Link>
                  <Link href="/results/middle" className="block px-4 py-2 text-sm text-yellow-950 hover:bg-yellow-50">
                    Middle School
                  </Link>
                  <Link href="/results/high" className="block px-4 py-2 text-sm text-yellow-950 hover:bg-yellow-50">
                    High School
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link href="/" className="text-yellow-950 text-xl font-serif font-bold">
              North Brooklyn Education
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/blog" className="text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium">
              Blog
            </Link>
            <Link href="/press" className="text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium">
              Press
            </Link>
            <Link href="/about" className="text-yellow-950 hover:text-yellow-600 uppercase text-sm font-medium">
              About
            </Link>
            <Button 
              className="bg-yellow-800 hover:bg-yellow-950 text-white uppercase"
              asChild
            >
              <Link href="/contact">
                Work With Us
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-950"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <Link
                href="/philosophy"
                className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                Philosophy
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                Services
              </Link>
              <button
                onClick={() => setIsResultsOpen(!isResultsOpen)}
                className="flex items-center w-full px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                Results
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResultsOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/results/elementary"
                    className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 text-sm"
                  >
                    Elementary School
                  </Link>
                  <Link
                    href="/results/middle"
                    className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 text-sm"
                  >
                    Middle School
                  </Link>
                  <Link
                    href="/results/high"
                    className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 text-sm"
                  >
                    High School
                  </Link>
                </div>
              )}
              <Link
                href="/blog"
                className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/press"
                className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                Press
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-yellow-950 hover:bg-yellow-50 uppercase text-sm font-medium"
              >
                About
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-yellow-800 hover:bg-yellow-950 text-white uppercase"
                  asChild
                >
                  <Link href="/contact">
                    Work With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

