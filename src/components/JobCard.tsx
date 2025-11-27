import { Card, CardContent, Box, Typography, Chip, Button } from '@mui/material';
import { MapPin, ArrowRight } from 'lucide-react';
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
              {logo}
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
