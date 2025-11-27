import { Card, CardContent, Box, Typography, Chip, Button } from '@mui/material';
import { MapPin, ArrowRight } from 'lucide-react';
import { Facebook, Twitter, Instagram, YouTube, Reddit, Apple as AppleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface JobCardProps {
  id: string;
  company: string;
  logo: string;
  logoColor: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  featured?: boolean;
  remote?: boolean;
}

const JobCard = ({ id, company, logo, logoColor, title, location, type, salary, featured, remote }: JobCardProps) => {
  const navigate = useNavigate();

  const getCompanyIcon = () => {
    const iconProps = { sx: { fontSize: 32, color: 'white' } };
    const companyLower = company.toLowerCase();
    
    if (companyLower.includes('netflix')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>N</Box>;
    } else if (companyLower.includes('figma')) {
      return (
        <Box sx={{ display: 'flex', gap: 0.3, alignItems: 'center' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F24E1E' }}/>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF7262' }}/>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#A259FF' }}/>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#1ABCFE' }}/>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0ACF83' }}/>
        </Box>
      );
    } else if (companyLower.includes('google')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>G</Box>;
    } else if (companyLower.includes('apple')) {
      return <AppleIcon {...iconProps} />;
    } else if (companyLower.includes('facebook')) {
      return <Facebook {...iconProps} />;
    } else if (companyLower.includes('amazon')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white', display: 'flex', alignItems: 'center' }}>
        <Box component="span">a</Box>
        <Box component="span" sx={{ fontSize: '1rem', mb: -1 }}>↗</Box>
      </Box>;
    } else if (companyLower.includes('microsoft')) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5, width: 24, height: 24 }}>
          <Box sx={{ bgcolor: '#F25022', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#7FBA00', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#00A4EF', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#FFB900', width: 11, height: 11 }}/>
        </Box>
      );
    } else if (companyLower.includes('dribbble')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>⛹</Box>;
    } else if (companyLower.includes('upwork')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>ᑌ</Box>;
    } else if (companyLower.includes('slack')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>#</Box>;
    } else if (companyLower.includes('freepik')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>F</Box>;
    } else if (companyLower.includes('twitter')) {
      return <Twitter {...iconProps} />;
    } else if (companyLower.includes('instagram')) {
      return <Instagram {...iconProps} />;
    } else if (companyLower.includes('reddit')) {
      return <Reddit {...iconProps} />;
    } else if (companyLower.includes('youtube')) {
      return <YouTube {...iconProps} />;
    } else if (companyLower.includes('adobe')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>Ae</Box>;
    }
    
    return logo || company.charAt(0).toUpperCase();
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0,102,255,0.15)',
          transform: 'translateY(-4px)'
        },
        position: 'relative'
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box 
              sx={{ 
                width: 48, 
                height: 48, 
                borderRadius: 1, 
                bgcolor: logoColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.25rem'
              }}
            >
              {getCompanyIcon()}
            </Box>
            <Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.5 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {company}
                </Typography>
                {featured && (
                  <Chip label="Featured" size="small" sx={{ bgcolor: 'rgba(255,193,7,0.1)', color: '#ffc107', height: 20 }} />
                )}
                {remote && (
                  <Chip label="Remote" size="small" sx={{ bgcolor: 'rgba(76,175,80,0.1)', color: '#4caf50', height: 20 }} />
                )}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <MapPin size={14} />
                {location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {type} • {salary}
          </Typography>
          <Button 
            variant="outlined"
            size="small"
            endIcon={<ArrowRight size={16} />}
            onClick={() => navigate(`/job/${id}`)}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Apply Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
