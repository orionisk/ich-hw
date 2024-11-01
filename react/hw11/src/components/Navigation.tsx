import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='max-w-screen-xl mx-auto p-4'>
      <ul className='flex gap-4'>
        <li>
          <NavLink
            to=''
            end
            className={({ isActive }) =>
              `${
                isActive
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-foreground'
              } hover:text-primary transition-all px-2 py-1`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='blog'
            className={({ isActive }) =>
              `${
                isActive
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-foreground'
              } hover:text-primary transition-all px-2 py-1`
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
