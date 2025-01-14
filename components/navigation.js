import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaGithub, FaDiscord } from 'react-icons/fa'

export default function Navigation() {
    const pathname = usePathname()

    return <nav>
        <div className="content-wrapper">
            <Link
                className="logo"
                href="/"
            >Cadence</Link>
            <Link
                className={pathname === '/learn' ? 'active' : ''}
                href="/learn"
            >Learn</Link>
            <a href="https://play.flow.com/">Playground</a>
            <Link
                className={pathname === '/community' ? 'active' : ''}
                href="/community"
            >Community</Link>
            <a href="https://developers.flow.com/cadence/language">Documentation</a>
            <a href="https://flow.com/flow-responsible-disclosure">Security</a>
            <a href="https://github.com/onflow/cadence" title="GitHub"><FaGithub/></a>
            <a href="https://discord.com/invite/J6fFnh2xx6" title="Discord"><FaDiscord/></a>
        </div>
    </nav>;
}
