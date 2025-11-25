import { Container, Box, Typography, TextField, Button, Grid, Card, CardContent, Chip, InputAdornment, Avatar, IconButton, Paper } from '@mui/material';
import { Search, MapPin, Layers, Briefcase, Building2, FileText, UserCheck, Clock, ChevronRight, Star, Users, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import jobIllustration from '@/assets/job-illustration.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Briefcase size={32} />, number: '1,75,324', label: 'Live Job', bgColor: '#E8F3FF' },
    { icon: <Building2 size={32} />, number: '97,354', label: 'Companies', bgColor: '#E8F3FF' },
    { icon: <Users size={32} />, number: '38,47,154', label: 'Candidates', bgColor: '#E8F3FF' },
    { icon: <Briefcase size={32} />, number: '7,532', label: 'New Jobs', bgColor: '#E8F3FF' }
  ];

  const vacancies = [
    { title: 'Anesthesiologists', openings: '45,904 Open Positions' },
    { title: 'Surgeons', openings: '50,364 Open Positions' },
    { title: 'Obstetricians-Gynecologists', openings: '4,339 Open Positions' },
    { title: 'Orthodontists', openings: '20,079 Open Positions' },
    { title: 'Maxillofacial Surgeons', openings: '74,875 Open Positions' },
    { title: 'Software Developer', openings: '43,359 Open Positions' },
    { title: 'Psychiatrists', openings: '18,599 Open Positions' },
    { title: 'Data Scientist', openings: '28,200 Open Positions', featured: true },
    { title: 'Financial Manager', openings: '61,391 Open Positions' },
    { title: 'Management Analysis', openings: '93,046 Open Positions' },
    { title: 'IT Manager', openings: '50,963 Open Positions' },
    { title: 'Operations Research Analysis', openings: '16,627 Open Positions' }
  ];

  const howItWorks = [
    { icon: <UserCheck size={40} />, title: 'Create account', description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.' },
    { icon: <FileText size={40} />, title: 'Upload CV/Resume', description: 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales' },
    { icon: <Search size={40} />, title: 'Find suitable job', description: 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.' },
    { icon: <Briefcase size={40} />, title: 'Apply job', description: 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.' }
  ];

  const categories = [
    { icon: <Layers size={24} />, title: 'Graphics & Design', openings: '357 Open position' },
    { icon: <Briefcase size={24} />, title: 'Code & Programing', openings: '312 Open position' },
    { icon: <Building2 size={24} />, title: 'Digital Marketing', openings: '297 Open position' },
    { icon: <FileText size={24} />, title: 'Video & Animation', openings: '247 Open position' },
    { icon: <Search size={24} />, title: 'Music & Audio', openings: '204 Open position' },
    { icon: <Users size={24} />, title: 'Account & Finance', openings: '167 Open position' },
    { icon: <UserCheck size={24} />, title: 'Health & Care', openings: '151 Open position' },
    { icon: <Clock size={24} />, title: 'Data & Science', openings: '107 Open position' }
  ];

  const featuredJobs = [
    { id: '1', company: 'Google', logo: 'G', logoColor: '#4285F4', title: 'Senior UX Designer', location: 'California', type: 'Full Time', salary: '$20k-$25k', featured: true },
    { id: '2', company: 'Apple', logo: '', logoColor: '#000', title: 'Software Engineer', location: 'Cupertino', type: 'Part Time', salary: '$15k-$20k', remote: true },
    { id: '3', company: 'Facebook', logo: 'f', logoColor: '#1877F2', title: 'Product Designer', location: 'New York', type: 'Full Time', salary: '$30k-$40k' },
    { id: '4', company: 'Amazon', logo: 'A', logoColor: '#FF9900', title: 'Frontend Developer', location: 'Seattle', type: 'Remote', salary: '$25k-$35k', featured: true }
  ];

  const companies = [
    { name: 'Dribbble', location: 'United States', featured: true, color: '#EA4C89', icon: '🏀' },
    { name: 'Upwork', location: 'United States', color: '#14A800', icon: '⬆️' },
    { name: 'Slack', location: 'China', color: '#E01E5A', icon: '#️⃣' },
    { name: 'Freepik', location: 'United States', color: '#1273EB', icon: '📷' },
    { name: 'Microsoft', location: 'United States', color: '#00A4EF', icon: '🪟' },
    { name: 'Adobe', location: 'United States', color: '#FF0000', icon: '🅰️' },
    { name: 'Netflix', location: 'United States', color: '#E50914', icon: '🎬' },
    { name: 'Amazon', location: 'United States', color: '#FF9900', icon: '📦' }
  ];

  const [companyIndex, setCompanyIndex] = useState(0);

  const testimonials = [
    { name: 'Robert Fox', role: 'UI/UX Designer', avatar: '👤', rating: 5, text: '"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."' },
    { name: 'Bessie Cooper', role: 'Creative Director', avatar: '👤', rating: 5, text: '"Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante"' },
    { name: 'Jane Cooper', role: 'Photographer', avatar: '👤', rating: 5, text: '"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus."' },
    { name: 'John Smith', role: 'Marketing Manager', avatar: '👤', rating: 5, text: '"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae ultricies eget."' },
    { name: 'Sarah Johnson', role: 'Product Designer', avatar: '👤', rating: 5, text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."' },
    { name: 'Mike Wilson', role: 'Software Engineer', avatar: '👤', rating: 5, text: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."' }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'hsl(220, 40%, 98%)', pt: 8, pb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Find a job that suits your interest & skills.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </Typography>
              
              <Paper sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField 
                  placeholder="Job title, Keyword..."
                  size="small"
                  sx={{ flex: 1, minWidth: 200 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={20} color="#0066FF" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField 
                  placeholder="Your Location"
                  size="small"
                  sx={{ flex: 1, minWidth: 200 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MapPin size={20} color="#0066FF" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/find-job')}
                  sx={{ px: 4, bgcolor: '#0066FF', '&:hover': { bgcolor: '#0052CC' } }}
                >
                  Find Job
                </Button>
              </Paper>
              
              <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                Suggestion: Designer, Programming, <span style={{ color: '#0066FF' }}>Digital Marketing</span>, Video, Animation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src={jobIllustration} 
                  alt="Job Portal Illustration" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Stats */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                    <Box sx={{ 
                      bgcolor: stat.bgColor, 
                      p: 1.5, 
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0066FF'
                    }}>
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.5rem' }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Most Popular Vacancies */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Most Popular Vacancies
        </Typography>
        <Grid container spacing={2}>
          {vacancies.map((vacancy, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ 
                cursor: 'pointer', 
                '&:hover .vacancy-title': { color: '#0066FF' },
                py: 2,
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      className="vacancy-title"
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 0.5,
                        transition: 'color 0.2s',
                        fontSize: '0.95rem'
                      }}
                    >
                      {vacancy.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      {vacancy.openings}
                    </Typography>
                  </Box>
                  {vacancy.featured && (
                    <Chip 
                      label="Featured" 
                      size="small" 
                      sx={{ 
                        bgcolor: '#0066FF', 
                        color: 'white',
                        height: 20,
                        fontSize: '0.7rem'
                      }} 
                    />
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How jobpilot work */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            How jobpilot work
          </Typography>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={4}>
            {howItWorks.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    bgcolor: index === 1 ? '#0066FF' : 'rgba(0,102,255,0.1)', 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    color: index === 1 ? 'white' : '#0066FF'
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Popular category */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Popular category
          </Typography>
          <Button endIcon={<ChevronRight />} sx={{ color: '#0066FF' }}>View All</Button>
        </Box>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ 
                cursor: 'pointer', 
                transition: 'all 0.3s',
                p: 2,
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(0,102,255,0.05)' },
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Box sx={{ 
                  bgcolor: 'rgba(0,102,255,0.1)', 
                  width: 48, 
                  height: 48, 
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0066FF',
                  flexShrink: 0
                }}>
                  {category.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.95rem' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                    {category.openings}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured job */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Featured job
          </Typography>
          <Button endIcon={<ChevronRight />} onClick={() => navigate('/find-job')} sx={{ color: '#0066FF' }}>View All</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {featuredJobs.map((job) => (
            <Card 
              key={job.id}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': { boxShadow: 2 }
              }}
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <Box sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: job.logoColor, 
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.25rem'
                    }}>
                      {job.logo}
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {job.title}
                        </Typography>
                        {job.featured && <Chip label="Featured" size="small" sx={{ bgcolor: '#E7F0FA', color: '#0066FF', height: 20, fontSize: '0.7rem' }} />}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {job.company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {job.salary}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <MapPin size={14} />
                          {job.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Button 
                    variant="contained" 
                    size="small" 
                    sx={{ 
                      bgcolor: '#0066FF', 
                      '&:hover': { bgcolor: '#0052CC' },
                      px: 3
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Top companies */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Top companies
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              onClick={() => setCompanyIndex(Math.max(0, companyIndex - 4))}
              disabled={companyIndex === 0}
              sx={{ 
                bgcolor: '#E7F0FA', 
                '&:hover': { bgcolor: '#D0E4F7' },
                '&:disabled': { bgcolor: '#F5F5F5' }
              }}
            >
              <ChevronLeft size={20} color="#0066FF" />
            </IconButton>
            <IconButton 
              onClick={() => setCompanyIndex(Math.min(companies.length - 4, companyIndex + 4))}
              disabled={companyIndex >= companies.length - 4}
              sx={{ 
                bgcolor: '#E7F0FA', 
                '&:hover': { bgcolor: '#D0E4F7' },
                '&:disabled': { bgcolor: '#F5F5F5' }
              }}
            >
              <ChevronRight size={20} color="#0066FF" />
            </IconButton>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {companies.slice(companyIndex, companyIndex + 4).map((company, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                border: '1px solid #E5E7EB',
                boxShadow: 'none',
                '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.08)' },
                transition: 'all 0.3s'
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Box sx={{ 
                      width: 56, 
                      height: 56, 
                      bgcolor: company.color + '15', 
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      flexShrink: 0
                    }}>
                      {company.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                          {company.name}
                        </Typography>
                        {company.featured && (
                          <Chip 
                            label="Featured" 
                            size="small" 
                            sx={{ 
                              bgcolor: '#FEF0E6', 
                              color: '#FF6B00',
                              height: 20,
                              fontSize: '0.7rem',
                              fontWeight: 600
                            }} 
                          />
                        )}
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                        <MapPin size={12} />
                        {company.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    fullWidth
                    sx={{ 
                      borderColor: '#E5E7EB',
                      color: '#0066FF',
                      '&:hover': { 
                        borderColor: '#0066FF',
                        bgcolor: '#E7F0FA'
                      }
                    }}
                  >
                    Open Position
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Clients Testimonial */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Clients Testimonial
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <IconButton 
            onClick={() => setTestimonialIndex(Math.max(0, testimonialIndex - 1))}
            disabled={testimonialIndex === 0}
            sx={{ 
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:hover': { bgcolor: '#E7F0FA' },
              '&:disabled': { bgcolor: '#F5F5F5' },
              zIndex: 1
            }}
          >
            <ChevronLeft size={24} color="#0066FF" />
          </IconButton>
          <IconButton 
            onClick={() => setTestimonialIndex(Math.min(testimonials.length - 3, testimonialIndex + 1))}
            disabled={testimonialIndex >= testimonials.length - 3}
            sx={{ 
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:hover': { bgcolor: '#E7F0FA' },
              '&:disabled': { bgcolor: '#F5F5F5' },
              zIndex: 1
            }}
          >
            <ChevronRight size={24} color="#0066FF" />
          </IconButton>
          <Grid container spacing={3}>
            {testimonials.slice(testimonialIndex, testimonialIndex + 3).map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid #F0F0F0'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                      {testimonial.text}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', position: 'relative' }}>
                      <Avatar sx={{ width: 48, height: 48, bgcolor: '#FFD93D' }}>{testimonial.avatar}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        position: 'absolute',
                        right: 0,
                        fontSize: '4rem',
                        color: '#E5E7EB',
                        lineHeight: 1,
                        fontFamily: 'Georgia, serif'
                      }}>
                        ❝
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <Box 
                key={index}
                onClick={() => setTestimonialIndex(index * 3)}
                sx={{ 
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: Math.floor(testimonialIndex / 3) === index ? '#0066FF' : '#D1D5DB',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* CTA Sections */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'hsl(220, 13%, 95%)', height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Become a Candidate
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
                </Typography>
                <Button variant="outlined" endIcon={<ChevronRight />} onClick={() => navigate('/signup')}>
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'primary.main', color: 'white', height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Become a Employers
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                  Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.
                </Typography>
                <Button variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }} endIcon={<ChevronRight />} onClick={() => navigate('/signup')}>
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
