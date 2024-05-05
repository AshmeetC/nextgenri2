import { FloatingNav } from '@/components/ui/floating-navbar';
const navItems = [
    {name: 'Home', link: '/'}, {name: 'About', link: '/about'}, {name: 'Explore', link: '/explore'}, {name: 'Team', link: '/team'}, {name: 'Contact', link: '/contact'}
]

export default function Navbar() {
    return(
        <FloatingNav navItems={navItems} />
    )
}