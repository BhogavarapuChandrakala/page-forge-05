import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Chip,
} from '@mui/material';
import {
  NavigateNext,
  LocationOn,
  CalendarToday,
  BusinessCenter,
  Language,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  ArrowForward,
} from '@mui/icons-material';

const EmployerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const openPositions = [
    { id: 1, company: 'Freepik', title: 'Visual Designer', type: 'Featured', salary: '$10K-$15K', logo: 'F', color: '#1da1f2', location: 'China' },
    { id: 2, company: 'Instagram', title: 'Front End Developer', type: '', salary: '$300-$500', logo: '📷', color: '#c13584', location: 'Australia' },
    { id: 3, company: 'Upwork', title: 'Technical Support Specialist', type: '', salary: '$300-$400', logo: 'Up', color: '#6fda44', location: 'France' },
    { id: 4, company: 'Facebook', title: 'Software Engineer', type: '', salary: '$15K-$20K', logo: 'f', color: '#1877f2', location: 'Los Angeles' },
    { id: 5, company: 'Microsoft', title: 'Product Designer', type: '', salary: '$400-$500', logo: 'M', color: '#f25022', location: 'Australia' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <Box sx={{ bgcolor: 'grey.50', py: 3, borderBottom: 1, borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Link underline="hover" color="inherit" href="/find-employers">Find Employers</Link>
            <Typography color="text.primary">Single Employers</Typography>
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>Single Employers</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                    }}
                  >
                    📷
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Twitter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Information Technology (IT)
                    </Typography>
                  </Box>
                  <Button variant="contained" size="large" endIcon={<ArrowForward />}>
                    View Open Position
                  </Button>
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
                  Description
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Enim at velit at nibh maximus fermentum. Mauris ac justo nibh. Praesent nec lorem lorem. 
                  Donec ullamcorper lacus mollis tortor pretium malesuada. In quis porta nibh, quis fringilla eros. 
                  Phasellus faucibus massa a efficitur blandit, orci eget porta ac, eget vulputate quam sem nec arcu. 
                  Sed eget posuere risus, nulla at lorem dolor. Cras aptent taciti sociosqu ad litora torquent hendrerit. 
                  Vestibulum in maximus orci, sed dolor fermentum. Mauris eleifend eu leo ac gravida. Etiam libero neque, 
                  consectetur leo ac viverra in, auctor nequis. Donec imperdiet massa a elementum rhoncus vulputate velit.
                </Typography>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
                  Company Benefits
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    In hac habitasse platea dictum.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Sed aliquet, arcu at iaculis laoreet, nibh ante eget taliquet idum rhoncus.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Vestibulum ut vestibulum orci.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    Etiam libero neque, consectetur eu tellus vitae, venenatis rhoncus vulputate velit.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary">
                    Nam condimentum sit amet ipsum ut malesuada
                  </Typography>
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
                  Company Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Praesent ultrices congue ex, sit amet elementum at venenatis sapien blandit. Etiam massa risus, 
                  accumsan nec tempus nec, venenatis in mi. Maecenas nulla sit, blandit id rhoncus in, pulvinar eget 
                  sapor ac, cursus convallis ac. Pellentesque facilisis tincidunt dictum.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Typography variant="body2" color="text.secondary">Share profile:</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button startIcon={<Facebook />} size="small">Facebook</Button>
                    <Button startIcon={<Twitter />} size="small">Facebook</Button>
                    <Button size="small">Pinterest</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <CalendarToday sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="caption" color="text.secondary" display="block">
                        FOUNDED IN
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        14 June, 2021
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <BusinessCenter sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="caption" color="text.secondary" display="block">
                        ORGANIZATION TYPE
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        Private Company
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <BusinessCenter sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="caption" color="text.secondary" display="block">
                        TEAM SIZE
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        120-300 Candidates
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <BusinessCenter sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
                      <Typography variant="caption" color="text.secondary" display="block">
                        INDUSTRY TYPES
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        Technology
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Language color="primary" />
                    <Typography variant="caption" color="text.secondary">WEBSITE</Typography>
                  </Box>
                  <Typography variant="body2">www.estherhoward.com</Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Phone color="primary" />
                    <Typography variant="caption" color="text.secondary">PHONE</Typography>
                  </Box>
                  <Typography variant="body2">+1-202-555-0141</Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Email color="primary" />
                    <Typography variant="caption" color="text.secondary">EMAIL ADDRESS</Typography>
                  </Box>
                  <Typography variant="body2">esther.howard@gmail.com</Typography>
                </Box>

                <Typography variant="body2" fontWeight={600} gutterBottom>
                  Follow us on:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" sx={{ minWidth: 40, p: 1 }}><Facebook /></Button>
                  <Button variant="contained" sx={{ minWidth: 40, p: 1 }}><Twitter /></Button>
                  <Button variant="outlined" sx={{ minWidth: 40, p: 1 }}><Instagram /></Button>
                  <Button variant="outlined" sx={{ minWidth: 40, p: 1 }}><YouTube /></Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Open Position (05)
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {openPositions.map((job) => (
              <Grid item xs={12} sm={6} key={job.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': { boxShadow: 4 },
                  }}
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 1,
                          bgcolor: job.color,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          fontWeight: 700,
                        }}
                      >
                        {job.logo}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {job.company}
                          </Typography>
                          {job.type && (
                            <Chip label={job.type} size="small" color="warning" />
                          )}
                        </Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.type || 'Full Time'} • {job.salary}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default EmployerDetails;
