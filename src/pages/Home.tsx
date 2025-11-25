import { Container, Box, Typography, TextField, Button, Grid, Card, CardContent, Chip, InputAdornment, Avatar, IconButton, Paper } from '@mui/material';
import { Search, MapPin, Layers, Briefcase, Building2, FileText, UserCheck, Clock, ChevronRight, Star, Users } from 'lucide-react';
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
    { icon: '📱', title: 'Graphics & Design', openings: '357 Open position' },
    { icon: '📊', title: 'Code & Programming', openings: '312 Open position' },
    { icon: '💼', title: 'Digital Marketing', openings: '297 Open position' },
    { icon: '📹', title: 'Video & Animation', openings: '247 Open position' },
    { icon: '🎵', title: 'Music & Audio', openings: '204 Open position' },
    { icon: '💰', title: 'Account & Finance', openings: '167 Open position' },
    { icon: '❤️', title: 'Health & Care', openings: '125 Open position' },
    { icon: '📝', title: 'Data & Science', openings: '57 Open position' }
  ];

  const featuredJobs = [
    { id: '1', company: 'Google', logo: 'G', logoColor: '#4285F4', title: 'Senior UX Designer', location: 'California', type: 'Full Time', salary: '$20k-$25k', featured: true },
    { id: '2', company: 'Apple', logo: '', logoColor: '#000', title: 'Software Engineer', location: 'Cupertino', type: 'Part Time', salary: '$15k-$20k', remote: true },
    { id: '3', company: 'Facebook', logo: 'f', logoColor: '#1877F2', title: 'Product Designer', location: 'New York', type: 'Full Time', salary: '$30k-$40k' },
    { id: '4', company: 'Amazon', logo: 'A', logoColor: '#FF9900', title: 'Frontend Developer', location: 'Seattle', type: 'Remote', salary: '$25k-$35k', featured: true }
  ];

  const companies = [
    { name: 'Dribbble', logo: '🎨', location: 'Dhaka, Bangladesh', openings: 3, color: '#EA4C89' },
    { name: 'Linkedin', logo: 'in', location: 'Dhaka, Bangladesh', openings: 3, color: '#0077B5' },
    { name: 'Tesla', logo: 'T', location: 'Dhaka, Bangladesh', openings: 3, color: '#E82127' },
    { name: 'Google', logo: 'G', location: 'Dhaka, Bangladesh', openings: 3, color: '#4285F4' }
  ];

  const testimonials = [
    { name: 'Bessie Cooper', role: 'Creative Director', avatar: '👤', rating: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris.' },
    { name: 'Jane Cooper', role: 'Photographer', avatar: '👤', rating: 5, text: 'Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante' },
    { name: 'Robert Fox', role: 'UI/UX Designer', avatar: '👤', rating: 5, text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.' }
  ];

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
        <Grid container spacing={4}>
          {howItWorks.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ 
                  bgcolor: 'rgba(0,102,255,0.1)', 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  color: 'primary.main'
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
      </Container>

      {/* Popular category */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Popular category
          </Typography>
          <Button endIcon={<ChevronRight />}>View All</Button>
        </Box>
        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ cursor: 'pointer', transition: 'all 0.3s', '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' } }}>
                <CardContent>
                  <Box sx={{ fontSize: '2rem', mb: 1 }}>{category.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {category.openings}
                  </Typography>
                </CardContent>
              </Card>
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
          <Button endIcon={<ChevronRight />} onClick={() => navigate('/find-job')}>View All</Button>
        </Box>
        <Grid container spacing={3}>
          {featuredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={6} key={job.id}>
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { boxShadow: 3, transform: 'translateY(-4px)' }
                }}
                onClick={() => navigate(`/job/${job.id}`)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: job.logoColor, 
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700
                    }}>
                      {job.logo}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
                        <Typography variant="body2">{job.company}</Typography>
                        {job.featured && <Chip label="Featured" size="small" color="warning" />}
                        {job.remote && <Chip label="Remote" size="small" color="success" />}
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <MapPin size={14} />
                        {job.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {job.title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {job.type} • {job.salary}
                    </Typography>
                    <Button variant="outlined" size="small">Apply Now</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Top companies */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Top companies
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ 
                    width: 60, 
                    height: 60, 
                    bgcolor: company.color + '20', 
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: company.color
                  }}>
                    {company.logo}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {company.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                    📍 {company.location}
                  </Typography>
                  <Button variant="contained" size="small" fullWidth>
                    Open Position ({company.openings})
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
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {testimonial.text}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar sx={{ width: 48, height: 48 }}>{testimonial.avatar}</Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
