"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Check, Wrench, Menu, X, Loader2, Sun, Moon, MapPin, ArrowRight, Clock } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/components/ThemeProvider"

// Live Experience Counter - Real-time counter showing years of experience
function LiveExperienceCounter() {
  // Start date: 8 years ago (February 2018)
  const startDate = new Date('2018-02-01T08:00:00')

  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const years = Math.floor(days / 365)

      setTimeElapsed({
        years: years,
        days: days % 365,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 text-white text-sm sm:text-lg md:text-xl font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-md min-w-[32px] sm:min-w-[44px] text-center">
        <span className="font-mono">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</span>
    </div>
  )

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2">
      <TimeBlock value={timeElapsed.years} label="Jahre" />
      <div className="text-lg sm:text-xl text-emerald-500 font-bold self-start mt-1">:</div>
      <TimeBlock value={timeElapsed.days} label="Tage" />
      <div className="text-lg sm:text-xl text-emerald-500 font-bold self-start mt-1">:</div>
      <TimeBlock value={timeElapsed.hours} label="Std" />
      <div className="text-lg sm:text-xl text-emerald-500 font-bold self-start mt-1">:</div>
      <TimeBlock value={timeElapsed.minutes} label="Min" />
      <div className="text-lg sm:text-xl text-emerald-500 font-bold self-start mt-1">:</div>
      <TimeBlock value={timeElapsed.seconds} label="Sek" />
    </div>
  )
}

// Animated Kitchen Icon - Full Installation Story
function AnimatedKitchen() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Floor */}
          <rect x="5" y="85" width="90" height="3" rx="1" className="fill-gray-300 dark:fill-gray-600" />

          {/* Wall background */}
          <rect x="8" y="10" width="84" height="75" className="fill-gray-200 dark:fill-gray-800" />

          {/* Upper Cabinet - slides down into place */}
          <g className="animate-[cabinetSlideDown_6s_ease-in-out_infinite]">
            <rect x="12" y="15" width="30" height="20" rx="2" className="fill-emerald-500" />
            <rect x="14" y="17" width="12" height="16" rx="1" className="fill-emerald-400" />
            <rect x="28" y="17" width="12" height="16" rx="1" className="fill-emerald-400" />
            <circle cx="25" cy="25" r="1" className="fill-emerald-700" />
            <circle cx="29" cy="25" r="1" className="fill-emerald-700" />
          </g>

          {/* Counter top - slides in from right */}
          <g className="animate-[counterSlide_6s_ease-in-out_infinite]">
            <rect x="10" y="45" width="80" height="5" rx="1" className="fill-gray-400 dark:fill-gray-500" />
          </g>

          {/* Lower Cabinet - slides up */}
          <g className="animate-[cabinetSlideUp_6s_ease-in-out_infinite]">
            <rect x="12" y="50" width="35" height="33" rx="2" className="fill-emerald-500" />
            <rect x="14" y="52" width="15" height="29" rx="1" className="fill-emerald-400" />
            <rect x="30" y="52" width="15" height="29" rx="1" className="fill-emerald-400" />
            <rect x="27" y="64" width="2" height="6" rx="0.5" className="fill-emerald-700" />
            <rect x="31" y="64" width="2" height="6" rx="0.5" className="fill-emerald-700" />
          </g>

          {/* Stove - fades in */}
          <g className="animate-[fadeInStove_6s_ease-in-out_infinite]">
            <rect x="50" y="50" width="38" height="33" rx="2" className="fill-gray-500 dark:fill-gray-600" />
            <rect x="52" y="52" width="34" height="20" rx="1" className="fill-gray-700 dark:fill-gray-800" />
            {/* Burners */}
            <circle cx="62" cy="78" r="4" className="fill-gray-600 dark:fill-gray-700" />
            <circle cx="78" cy="78" r="4" className="fill-gray-600 dark:fill-gray-700" />
          </g>

          {/* Flame appears last */}
          <g className="animate-[flameAppear_6s_ease-in-out_infinite]">
            <ellipse cx="62" cy="76" rx="2.5" ry="4" className="fill-orange-500" />
            <ellipse cx="62" cy="74" rx="1.5" ry="2.5" className="fill-yellow-400" />
            <ellipse cx="78" cy="76" rx="2.5" ry="4" className="fill-orange-500" />
            <ellipse cx="78" cy="74" rx="1.5" ry="2.5" className="fill-yellow-400" />
          </g>

          {/* Steam from cooking */}
          <g className="animate-[steamRise_6s_ease-in-out_infinite]">
            <path d="M60 68 Q62 64 64 68" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M76 68 Q78 64 80 68" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
          </g>

          {/* Worker/Installer silhouette with tool */}
          <g className="animate-[workerMove_6s_ease-in-out_infinite]">
            {/* Head */}
            <circle cx="70" cy="30" r="5" className="fill-emerald-700" />
            {/* Body */}
            <rect x="67" y="35" width="6" height="10" rx="2" className="fill-emerald-600" />
            {/* Arm with drill */}
            <line x1="67" y1="38" x2="58" y2="42" stroke="currentColor" strokeWidth="2" className="text-emerald-700" strokeLinecap="round" />
            {/* Drill */}
            <rect x="54" y="40" width="6" height="4" rx="1" className="fill-yellow-500" />
            <rect x="51" y="41" width="4" height="2" className="fill-gray-500" />
          </g>

          {/* Checkmark appears at end */}
          <g className="animate-[checkAppear_6s_ease-in-out_infinite]">
            <circle cx="85" cy="20" r="8" className="fill-emerald-500" />
            <path d="M81 20 L84 23 L89 17" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  )
}

// Animated Furniture Icon - Assembly Story
function AnimatedFurniture() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Floor */}
          <rect x="5" y="88" width="90" height="3" rx="1" className="fill-gray-300 dark:fill-gray-600" />

          {/* Scattered parts at start - fade out */}
          <g className="animate-[partsDisappear_7s_ease-in-out_infinite]">
            {/* Wooden boards */}
            <rect x="10" y="75" width="20" height="4" rx="1" className="fill-amber-600" />
            <rect x="35" y="78" width="15" height="3" rx="1" className="fill-amber-500" transform="rotate(-15 35 78)" />
            <rect x="55" y="72" width="18" height="4" rx="1" className="fill-amber-600" transform="rotate(10 55 72)" />
            <rect x="75" y="80" width="12" height="3" rx="1" className="fill-amber-500" />

            {/* Screws */}
            <circle cx="20" cy="70" r="1.5" className="fill-gray-500" />
            <circle cx="50" cy="68" r="1.5" className="fill-gray-500" />
            <circle cx="70" cy="70" r="1.5" className="fill-gray-500" />

            {/* Tools */}
            <rect x="80" y="65" width="10" height="3" rx="1" className="fill-yellow-500" />
          </g>

          {/* Wardrobe being assembled - appears step by step */}

          {/* Base/Bottom - slides in first */}
          <g className="animate-[wardrobeBase_7s_ease-in-out_infinite]">
            <rect x="20" y="75" width="50" height="4" rx="1" className="fill-teal-600" />
          </g>

          {/* Left side panel - rises up */}
          <g className="animate-[wardrobeLeft_7s_ease-in-out_infinite]">
            <rect x="20" y="30" width="4" height="49" rx="1" className="fill-teal-500" />
          </g>

          {/* Right side panel - rises up */}
          <g className="animate-[wardrobeRight_7s_ease-in-out_infinite]">
            <rect x="66" y="30" width="4" height="49" rx="1" className="fill-teal-500" />
          </g>

          {/* Top panel - drops down */}
          <g className="animate-[wardrobeTop_7s_ease-in-out_infinite]">
            <rect x="20" y="26" width="50" height="4" rx="1" className="fill-teal-600" />
          </g>

          {/* Shelves - slide in */}
          <g className="animate-[wardrobeShelves_7s_ease-in-out_infinite]">
            <rect x="24" y="45" width="42" height="2" rx="0.5" className="fill-teal-400" />
            <rect x="24" y="60" width="42" height="2" rx="0.5" className="fill-teal-400" />
          </g>

          {/* Doors - swing closed */}
          <g className="animate-[wardrobeDoorLeft_7s_ease-in-out_infinite]">
            <rect x="24" y="30" width="20" height="45" rx="1" className="fill-teal-400" />
            <circle cx="42" cy="52" r="1.5" className="fill-teal-700" />
          </g>
          <g className="animate-[wardrobeDoorRight_7s_ease-in-out_infinite]">
            <rect x="46" y="30" width="20" height="45" rx="1" className="fill-teal-400" />
            <circle cx="48" cy="52" r="1.5" className="fill-teal-700" />
          </g>

          {/* Worker with screwdriver */}
          <g className="animate-[furnitureWorker_7s_ease-in-out_infinite]">
            {/* Head */}
            <circle cx="82" cy="50" r="5" className="fill-teal-700" />
            {/* Body */}
            <rect x="79" y="55" width="6" height="12" rx="2" className="fill-teal-600" />
            {/* Arm with screwdriver */}
            <line x1="79" y1="58" x2="70" y2="55" stroke="currentColor" strokeWidth="2" className="text-teal-700" strokeLinecap="round" />
            {/* Screwdriver */}
            <rect x="64" y="53" width="8" height="3" rx="1" className="fill-yellow-500" />
            <rect x="62" y="54" width="3" height="1" className="fill-gray-500" />
            {/* Legs */}
            <rect x="79" y="67" width="2.5" height="10" rx="1" className="fill-teal-800" />
            <rect x="82.5" y="67" width="2.5" height="10" rx="1" className="fill-teal-800" />
          </g>

          {/* Sparkles when complete */}
          <g className="animate-[sparkles_7s_ease-in-out_infinite]">
            <path d="M15 35 L17 30 L19 35 L17 40 Z" className="fill-yellow-400" />
            <path d="M75 25 L77 20 L79 25 L77 30 Z" className="fill-yellow-400" />
            <circle cx="45" cy="20" r="2" className="fill-yellow-300" />
          </g>

          {/* Checkmark */}
          <g className="animate-[checkAppear_7s_ease-in-out_infinite]">
            <circle cx="85" cy="25" r="8" className="fill-teal-500" />
            <path d="M81 25 L84 28 L89 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  )
}

// Animated Truck Icon - Full Delivery Story
function AnimatedTruck() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 120 80" className="w-full h-full">
          {/* Road */}
          <rect x="0" y="70" width="120" height="8" className="fill-gray-400 dark:fill-gray-600" />
          <line x1="0" y1="74" x2="120" y2="74" stroke="white" strokeWidth="1" strokeDasharray="8 6" opacity="0.5" />

          {/* Truck that moves */}
          <g className="animate-[truckDrive_10s_ease-in-out_infinite]">
            {/* Truck cargo area */}
            <rect x="15" y="35" width="45" height="30" rx="2" className="fill-emerald-500" />

            {/* Back panel of truck (visible when doors open) */}
            <rect x="15" y="37" width="4" height="26" className="fill-emerald-700" />

            {/* Left back door - opens outward */}
            <g className="animate-[doorOpenLeft_10s_ease-in-out_infinite]" style={{ transformOrigin: '15px 50px' }}>
              <rect x="3" y="37" width="14" height="26" rx="1" className="fill-emerald-400 stroke-emerald-600" strokeWidth="0.5" />
              <rect x="14" y="48" width="2" height="6" rx="0.5" className="fill-emerald-700" />
            </g>

            {/* Right back door - opens outward (slightly delayed) */}
            <g className="animate-[doorOpenRight_10s_ease-in-out_infinite]" style={{ transformOrigin: '15px 50px' }}>
              <rect x="3" y="37" width="14" height="26" rx="1" className="fill-emerald-300 stroke-emerald-500" strokeWidth="0.5" />
              <rect x="4" y="48" width="2" height="6" rx="0.5" className="fill-emerald-600" />
            </g>

            {/* Cargo inside - boxes that appear/load */}
            <g className="animate-[cargoLoad_10s_ease-in-out_infinite]">
              {/* Box 1 */}
              <rect x="20" y="50" width="10" height="12" rx="1" className="fill-amber-500" />
              <line x1="25" y1="50" x2="25" y2="62" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" />
              <line x1="20" y1="56" x2="30" y2="56" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" />

              {/* Box 2 */}
              <rect x="32" y="48" width="12" height="14" rx="1" className="fill-amber-600" />
              <line x1="38" y1="48" x2="38" y2="62" stroke="currentColor" strokeWidth="0.5" className="text-amber-800" />

              {/* Box 3 - smaller on top */}
              <rect x="24" y="40" width="8" height="8" rx="1" className="fill-amber-400" />

              {/* Furniture piece */}
              <rect x="46" y="45" width="10" height="17" rx="1" className="fill-teal-500" />
            </g>

            {/* Cabin */}
            <path d="M60 38 L60 65 L82 65 L82 48 L72 38 Z" className="fill-emerald-600" />

            {/* Windshield */}
            <path d="M63 41 L72 41 L80 50 L80 56 L63 56 Z" className="fill-sky-200 dark:fill-sky-300" />

            {/* Driver silhouette */}
            <circle cx="70" cy="52" r="4" className="fill-emerald-800" />

            {/* Front wheel */}
            <g className="animate-[wheelSpin_10s_linear_infinite]">
              <circle cx="75" cy="68" r="8" className="fill-gray-700" />
              <circle cx="75" cy="68" r="4" className="fill-gray-500" />
              <line x1="75" y1="61" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
              <line x1="68" y1="68" x2="82" y2="68" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
            </g>

            {/* Back wheel */}
            <g className="animate-[wheelSpin_10s_linear_infinite]">
              <circle cx="30" cy="68" r="8" className="fill-gray-700" />
              <circle cx="30" cy="68" r="4" className="fill-gray-500" />
              <line x1="30" y1="61" x2="30" y2="75" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
              <line x1="23" y1="68" x2="37" y2="68" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
            </g>

            {/* Exhaust when driving */}
            <g className="animate-[exhaustSmoke_10s_ease-in-out_infinite]">
              <circle cx="10" cy="62" r="2" className="fill-gray-400 opacity-40" />
              <circle cx="5" cy="60" r="3" className="fill-gray-400 opacity-30" />
              <circle cx="-2" cy="57" r="2.5" className="fill-gray-400 opacity-20" />
            </g>
          </g>

          {/* Worker loading - appears during loading phase */}
          <g className="animate-[workerLoading_10s_ease-in-out_infinite]">
            {/* Worker body */}
            <circle cx="8" cy="52" r="4" className="fill-emerald-700" />
            <rect x="5" y="56" width="6" height="10" rx="2" className="fill-emerald-600" />
            {/* Legs */}
            <rect x="5" y="66" width="2.5" height="6" rx="1" className="fill-emerald-800" />
            <rect x="8.5" y="66" width="2.5" height="6" rx="1" className="fill-emerald-800" />
            {/* Arms carrying box */}
            <rect x="10" y="58" width="8" height="6" rx="1" className="fill-amber-500" />
          </g>

          {/* House/destination appears */}
          <g className="animate-[houseAppear_10s_ease-in-out_infinite]">
            <rect x="95" y="45" width="20" height="25" className="fill-gray-300 dark:fill-gray-500" />
            <polygon points="95,45 105,32 115,45" className="fill-red-400 dark:fill-red-500" />
            <rect x="102" y="55" width="6" height="15" className="fill-amber-700" />
            <rect x="97" y="50" width="5" height="5" className="fill-sky-300" />
            <rect x="108" y="50" width="5" height="5" className="fill-sky-300" />
          </g>

          {/* Checkmark when delivered */}
          <g className="animate-[deliveryComplete_10s_ease-in-out_infinite]">
            <circle cx="105" cy="25" r="8" className="fill-emerald-500" />
            <path d="M101 25 L104 28 L109 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  )
}

const serviceTypes = [
  { value: "kueche", label: "Küchenmontage" },
  { value: "moebel", label: "Möbelmontage" },
  { value: "lieferung", label: "Lieferung & Montage" },
  { value: "aufbau", label: "Möbelaufbau" },
  { value: "sonstiges", label: "Sonstiges" }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const formRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    serviceType: "",
    description: "",
    name: "",
    phone: "",
    location: ""
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const scrollToForm = (serviceType?: string) => {
    if (serviceType) {
      setFormData(prev => ({ ...prev, serviceType }))
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubmit = async () => {
    setFormError(null)
    if (!formData.name || !formData.phone || !formData.serviceType) {
      setFormError("Bitte füllen Sie alle Pflichtfelder aus.")
      return
    }
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      setFormError("Fehler beim Senden. Bitte versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = [
    { href: "/#services", label: "Leistungen" },
    { href: "/#form", label: "Anfrage" },
    { href: "/#contact", label: "Kontakt" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Custom animations */}
      <style jsx global>{`
        /* ===== KITCHEN ANIMATIONS ===== */
        @keyframes cabinetSlideDown {
          0%, 10% { opacity: 0; transform: translateY(-30px); }
          20%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes counterSlide {
          0%, 20% { opacity: 0; transform: translateX(40px); }
          35%, 100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cabinetSlideUp {
          0%, 25% { opacity: 0; transform: translateY(30px); }
          40%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInStove {
          0%, 35% { opacity: 0; }
          50%, 100% { opacity: 1; }
        }
        @keyframes flameAppear {
          0%, 60% { opacity: 0; transform: scaleY(0); }
          70%, 85% { opacity: 1; transform: scaleY(1); }
          90%, 95% { opacity: 1; transform: scaleY(1.2); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes steamRise {
          0%, 65% { opacity: 0; transform: translateY(0); }
          75% { opacity: 0.6; transform: translateY(-3px); }
          90% { opacity: 0.3; transform: translateY(-8px); }
          100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes workerMove {
          0%, 5% { opacity: 1; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(-15px); }
          70%, 100% { opacity: 0; transform: translateX(-30px); }
        }
        @keyframes checkAppear {
          0%, 75% { opacity: 0; transform: scale(0); }
          85% { opacity: 1; transform: scale(1.2); }
          95%, 100% { opacity: 1; transform: scale(1); }
        }

        /* ===== FURNITURE ANIMATIONS ===== */
        @keyframes partsDisappear {
          0%, 10% { opacity: 1; }
          25%, 100% { opacity: 0; }
        }
        @keyframes wardrobeBase {
          0%, 15% { opacity: 0; transform: translateY(20px); }
          25%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wardrobeLeft {
          0%, 20% { opacity: 0; transform: translateY(40px) rotate(-10deg); }
          35%, 100% { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes wardrobeRight {
          0%, 25% { opacity: 0; transform: translateY(40px) rotate(10deg); }
          40%, 100% { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes wardrobeTop {
          0%, 35% { opacity: 0; transform: translateY(-20px); }
          50%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wardrobeShelves {
          0%, 45% { opacity: 0; transform: translateX(-30px); }
          60%, 100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes wardrobeDoorLeft {
          0%, 55% { opacity: 0; transform: perspective(100px) rotateY(-90deg); }
          70%, 100% { opacity: 1; transform: perspective(100px) rotateY(0deg); }
        }
        @keyframes wardrobeDoorRight {
          0%, 60% { opacity: 0; transform: perspective(100px) rotateY(90deg); }
          75%, 100% { opacity: 1; transform: perspective(100px) rotateY(0deg); }
        }
        @keyframes furnitureWorker {
          0%, 10% { opacity: 1; transform: translateX(0); }
          15% { opacity: 1; transform: translateX(-5px); }
          50% { opacity: 1; transform: translateX(-10px); }
          70%, 100% { opacity: 0; transform: translateX(20px); }
        }
        @keyframes sparkles {
          0%, 80% { opacity: 0; transform: scale(0); }
          85% { opacity: 1; transform: scale(1.3); }
          90% { opacity: 1; transform: scale(0.9); }
          95%, 100% { opacity: 1; transform: scale(1); }
        }

        /* ===== TRUCK/DELIVERY ANIMATIONS ===== */
        /* Timeline: 0-10% arrive | 10-20% doors open | 20-40% loading | 40-50% doors close | 50-85% drive | 85-100% complete */
        @keyframes truckDrive {
          0%, 50% { transform: translateX(0); }
          52% { transform: translateX(0) translateY(-2px); }
          60%, 85% { transform: translateX(35px); }
          90%, 100% { transform: translateX(35px); }
        }
        @keyframes doorOpenLeft {
          0%, 10% { transform: perspective(100px) rotateY(0deg); }
          18%, 42% { transform: perspective(100px) rotateY(-80deg); }
          50%, 100% { transform: perspective(100px) rotateY(0deg); }
        }
        @keyframes doorOpenRight {
          0%, 10% { transform: perspective(100px) rotateY(0deg); }
          18%, 42% { transform: perspective(100px) rotateY(80deg); }
          50%, 100% { transform: perspective(100px) rotateY(0deg); }
        }
        @keyframes cargoLoad {
          0%, 15% { opacity: 0; transform: translateX(-25px) translateY(10px); }
          25% { opacity: 0.7; transform: translateX(-10px) translateY(5px); }
          38%, 100% { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes wheelSpin {
          0%, 50% { transform: rotate(0deg); }
          55%, 85% { transform: rotate(1080deg); }
          100% { transform: rotate(1080deg); }
        }
        @keyframes exhaustSmoke {
          0%, 52% { opacity: 0; }
          55%, 80% { opacity: 0.6; transform: translateX(-15px); }
          90%, 100% { opacity: 0; transform: translateX(-25px); }
        }
        @keyframes workerLoading {
          0%, 12% { opacity: 0; transform: translateX(-30px); }
          18% { opacity: 1; transform: translateX(-5px); }
          25% { opacity: 1; transform: translateX(8px); }
          32% { opacity: 1; transform: translateX(0); }
          38% { opacity: 1; transform: translateX(-10px); }
          45%, 100% { opacity: 0; transform: translateX(-30px); }
        }
        @keyframes houseAppear {
          0%, 55% { opacity: 0.2; transform: scale(0.95); }
          70%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes deliveryComplete {
          0%, 88% { opacity: 0; transform: scale(0); }
          94% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-emerald-600 rounded-lg p-2.5">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Möbelmontage Nürnberg</h1>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition text-sm font-medium">
                  {item.label}
                </Link>
              ))}
              <a href="tel:+4917632333561" className="flex items-center gap-2 text-emerald-600 font-semibold">
                <Phone className="w-4 h-4" />
                0176 32333561
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <a href="tel:+4917632333561" className="mt-2 px-4 py-3 bg-emerald-600 text-white rounded-lg text-center font-semibold">
                  Jetzt anrufen
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Integrated Services */}
      <section id="services" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <p className="text-emerald-600 font-medium mb-4">Ihr Experte in Nürnberg & Umgebung</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Professionelle Küchen- & Möbelmontage
            </h2>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-5xl mx-auto">
            <button
              type="button"
              onClick={() => scrollToForm('kueche')}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 pt-4 sm:pt-6 md:pt-8 text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[140px] sm:min-h-[200px] md:min-h-[280px] flex flex-col items-center justify-start"
            >
              <AnimatedKitchen />
              <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1 md:mb-2 mt-1 md:mt-2">Küchenmontage</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">Komplette Montage inkl. Elektro- und Wasseranschluss</p>
            </button>
            <button
              type="button"
              onClick={() => scrollToForm('moebel')}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 pt-4 sm:pt-6 md:pt-8 text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[140px] sm:min-h-[200px] md:min-h-[280px] flex flex-col items-center justify-start"
            >
              <AnimatedFurniture />
              <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1 md:mb-2 mt-1 md:mt-2">Möbelmontage</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">Aufbau von Schränken, Betten und Regalen</p>
            </button>
            <button
              type="button"
              onClick={() => scrollToForm('lieferung')}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 pt-4 sm:pt-6 md:pt-8 text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[140px] sm:min-h-[200px] md:min-h-[280px] flex flex-col items-center justify-start"
            >
              <AnimatedTruck />
              <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-1 md:mb-2 mt-1 md:mt-2">Lieferung</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">Transport und Lieferung direkt zu Ihnen</p>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section with Live Counter */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          {/* Live Counter at Top */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Seit 2018 aktiv</span>
            </div>
            <LiveExperienceCounter />
          </div>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">2000+</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Montagen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">8+ Jahre</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">150km</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Umkreis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">100%</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Zufriedenheit</div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">
              Wir holen und montieren Ihre Möbel von allen bekannten Möbelhäusern
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
              {['IKEA', 'XXXLutz', 'mömax', 'POCO', 'OBI', 'Höffner', 'Segmüller'].map((partner) => (
                <div key={partner} className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
                  <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Simple Form Section */}
      <section id="form" ref={formRef} className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            {/* Benefits Box */}
            <div className="bg-gray-800/90 dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-200">Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-200">Flexible Termine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-200">Faire Festpreise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-200">Professionelle Montage</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-700 pt-3">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Ihre Daten werden vertraulich behandelt.</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">Jetzt Anfrage stellen</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Kostenlos und unverbindlich</p>

            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <CardContent className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-600 mb-2">Anfrage gesendet!</h4>
                    <p className="text-gray-600 dark:text-gray-400">Wir melden uns schnellstmöglich bei Ihnen.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Select onValueChange={(value) => setFormData({...formData, serviceType: value})} value={formData.serviceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Art der Dienstleistung *" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Input
                      placeholder="Ihr Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />

                    <Input
                      placeholder="Telefonnummer *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />

                    <Input
                      placeholder="PLZ / Ort (optional)"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />

                    <Textarea
                      placeholder="Beschreiben Sie Ihr Projekt (optional)"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="min-h-[100px]"
                    />

                    {formError && (
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                        {formError}
                      </div>
                    )}

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit} disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin mr-2" />Wird gesendet...</> : 'Anfrage absenden'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Kontakt</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <a href="tel:+4917632333561" className="group">
                <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-medium">0176 32333561</p>
              </a>
              <a href="mailto:info@moebelmontage-nuernberg.de" className="group">
                <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-sm">info@moebelmontage-nuernberg.de</p>
              </a>
              <div>
                <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="font-medium">Nürnberg & 150 km</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 text-center">
              <a
                href="https://wa.me/4917632333561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 rounded-lg p-2">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">Möbelmontage Nürnberg</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Mo – Sa: 08:00 – 20:00</span>
              <span>|</span>
              <a href="tel:+4917632333561">0176 32333561</a>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-white transition">Impressum</Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-white transition">Datenschutz</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            © 2024 Möbelmontage Nürnberg | Selbstständiger Montageservice
          </div>
        </div>
      </footer>

      {/* Single Floating Button - Phone */}
      <a
        href="tel:+4917632333561"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Anrufen"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
