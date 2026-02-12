export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <>
      {/* Light mode logo */}
      <img 
        src="/logo.svg"
        alt="Proofio Logo" 
        className={`${className} dark:hidden`}
      />
      {/* Dark mode logo */}
      <img 
        src="/whitelogo.svg"
        alt="Proofio Logo" 
        className={`${className} hidden dark:block`}
      />
    </>
  )
}
