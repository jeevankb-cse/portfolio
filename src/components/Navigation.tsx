import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DescriptionIcon from '@mui/icons-material/Description';

const drawerWidth = 260;
const navItems = [
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Skills', 'expertise'],
  ['Honors', 'honors'],
  ['Contact', 'contact'],
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > 20;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <p className="mobile-menu-top" style={{ fontSize: '1.25rem', fontWeight: 800, margin: '12px 0' }}>
        Jeevan K B
      </p>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', py: 1.2 }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} primaryTypographyProps={{ fontWeight: 600, fontSize: '1.05rem' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Button
        component="a"
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        fullWidth
        startIcon={<DescriptionIcon />}
        sx={{
          backgroundColor: '#1d4ed8',
          color: '#ffffff !important',
          fontWeight: 700,
          fontSize: '1rem',
          textTransform: 'none',
          py: 1.2,
          borderRadius: '8px',
          boxShadow: '0 4px 14px rgba(29, 78, 216, 0.4)',
          '&:hover': {
            backgroundColor: '#1e40af',
          }
        }}
      >
        View Resume
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: mode === 'dark' 
            ? (scrolled ? 'rgba(13, 17, 22, 0.95)' : '#0d1116') 
            : (scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff'),
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled 
            ? (mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)') 
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar className='navigation-bar' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: { xs: 2, md: 5 } }}>
          
          {/* Left: Brand Name & Mobile Menu Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { md: 'none' }, color: mode === 'dark' ? '#fff' : '#0d1116' }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              onClick={() => scrollToSection('top')}
              sx={{
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: { xs: '1.2rem', sm: '1.35rem' },
                letterSpacing: '-0.3px',
                color: mode === 'dark' ? '#ffffff' : '#0d1116',
                userSelect: 'none',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.8,
                }
              }}
            >
              Jeevan K B
            </Box>
          </Box>

          {/* Center: Nav links (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button 
                key={item[0]} 
                onClick={() => scrollToSection(item[1])} 
                sx={{ 
                  color: mode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : '#4b5563',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 1.8,
                  py: 0.8,
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: mode === 'dark' ? '#ffffff' : '#111827',
                    backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          {/* Right: Theme Toggle & View Resume button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            <IconButton
              onClick={() => modeChange()}
              sx={{ 
                color: mode === 'dark' ? '#fbbf24' : '#4b5563',
                p: 1,
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'scale(1.1)' }
              }}
              title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <Button
              component="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: '#1d4ed8',
                color: '#ffffff !important',
                fontWeight: 600,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                textTransform: 'none',
                px: { xs: 1.8, sm: 2.4 },
                py: { xs: 0.7, sm: 0.9 },
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.4)',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#1e40af',
                  boxShadow: '0 6px 20px rgba(29, 78, 216, 0.6)',
                  transform: 'translateY(-1px)',
                }
              }}
            >
              View Resume
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
