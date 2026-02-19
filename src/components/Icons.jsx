(() => {
    const IconBase = ({ children, className = "", ...props }) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className} 
            {...props}
        >
            {children}
        </svg>
    );

    const Menu = (props) => (
        <IconBase {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconBase>
    );

    const X = (props) => (
        <IconBase {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconBase>
    );

    const ChevronDown = (props) => (
        <IconBase {...props}><path d="m6 9 6 6 6-6"/></IconBase>
    );

    const ChevronUp = (props) => (
        <IconBase {...props}><path d="m18 15-6-6-6 6"/></IconBase>
    );

    const Clock = (props) => (
        <IconBase {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></IconBase>
    );

    const Car = (props) => (
        <IconBase {...props}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></IconBase>
    );

    const Bath = (props) => (
        <IconBase {...props}><path d="M9 6 6.5 3.5"/><path d="M3 7h18"/><path d="M7 19v-9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5"/><path d="M22 13v-3a2 2 0 0 0-2-2h-3.5"/><path d="M7 16h13.5a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1-2.5-2.5V16Z"/></IconBase>
    );

    const Dumbbell = (props) => (
        <IconBase {...props}><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></IconBase> 
    );

    const Scissors = (props) => (
        <IconBase {...props}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></IconBase>
    );

    const Phone = (props) => (
        <IconBase {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></IconBase>
    );

    const MapPin = (props) => (
        <IconBase {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconBase>
    );

    const Check = (props) => (
        <IconBase {...props}><polyline points="20 6 9 17 4 12"/></IconBase>
    );

    const ArrowRight = (props) => (
        <IconBase {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconBase>
    );

    const Logo = ({ className = "w-8 h-8 text-clover-primary" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 11.58 4.42 14 7.5 14C8.63 14 9.68 13.62 10.53 12.97L11 18L10 21H14L13 18L13.47 12.97C14.32 13.62 15.37 14 16.5 14C19.58 14 22 11.58 22 8.5C22 5.42 19.58 3 16.5 3ZM7.5 12C5.57 12 4 10.43 4 8.5C4 6.57 5.57 5 7.5 5C8.69 5 9.74 5.59 10.41 6.5C10.15 7.12 10 7.79 10 8.5C10 9.21 10.15 9.88 10.41 10.5C9.74 11.41 8.69 12 7.5 12ZM16.5 12C15.31 12 14.26 11.41 13.59 10.5C13.85 9.88 14 9.21 14 8.5C14 7.79 13.85 7.12 13.59 6.5C14.26 5.59 15.31 5 16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12Z" />
        </svg>
    );

    window.Icons = {
        Menu, X, ChevronDown, ChevronUp, Clock, Car, Bath, Dumbbell, Scissors, Phone, MapPin, Check, ArrowRight, Logo
    };
})();