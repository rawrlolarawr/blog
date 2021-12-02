import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="nav">
            <Link href="/" passHref>
                <h2>BlogLolaBlog</h2>
            </Link>
            <Link href="/about" passHref>
                <p>About Me</p>
            </Link>
        </nav>
    ) 
}

export default Nav