import { Container, Box, Typography, Button, Chip, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { MapPin, Clock, Bookmark, ArrowRight, Briefcase, DollarSign, Calendar, X, Bold, Italic, Underline, Link as LinkIcon, List as ListIcon, ListOrdered } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [applyOpen, setApplyOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');

  return (
    <Box>
      <Header />
      
      <Box sx={{ bgcolor: 'hsl(220, 40%, 98%)', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Home / Find Job / Graphics & Design / Job Details
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                📸
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Senior UX Designer
                  </Typography>
                  <Chip label="Featured" size="small" sx={{ bgcolor: 'rgba(255,193,7,0.1)', color: '#ffc107' }} />
                  <Chip label="Full Time" size="small" color="primary" />
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  🔗 https://instagram.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <IconButton>
                  <Bookmark size={24} />
                </IconButton>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowRight />}
                  onClick={() => setApplyOpen(true)}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
              Job expire in: <span style={{ color: '#DC3545' }}>June 30, 2021</span>
            </Typography>

            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Job Description
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                  Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Vivamus sit amet ligula ligula ullamcorper, pulvinar mauris in, venenatis nulla. Donec congue leo et urna. Maecenas blandit felis id massa sodales finibus. Sed lobortis diam tincidunt accumsan faucibus. Integer tincidunt hendrerit auctor. Sed at lectus interdum, varius dapibus ex non, pharetra orci. Suspendisse sollicitudin faucibus aliquam. Vestibulum et dapibus sapien, eget scelerisque felis arcu. Suspendisse sollicitudin felis faucibus aliquam porta.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Nam dapibus consectetur erat in euismod. Cras aliquet nibh. Sed tristique dictum elementum. Aliquam sit amet orci interdum, bibh. Sed tristique dictum elementum. In neque sit amet orci interdum tincidunt.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Responsibilities
                </Typography>
                <Box component="ul" sx={{ pl: 3, '& li': { mb: 1, color: 'text.secondary' } }}>
                  <li>Quisque semper gravida est et consectetur.</li>
                  <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
                  <li>Morbi mattis in ipsum ac tempus.</li>
                  <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec,</li>
                  <li>vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
                  <li>lobortis vel lectus. Nulla at risus vel diam.</li>
                  <li>commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
                  <li>odio metus posuere lorem, id condimentum nelit nec velit nec neque.</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <DollarSign color="white" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      SALARY (USD)
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      $30,000 - $35,000
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(0,102,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Clock color="#0066FF" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      JOB EXPIRE IN
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      July 31, 2021
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(0,102,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Briefcase color="#0066FF" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      EDUCATION
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Graduation
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(0,102,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin color="#0066FF" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      LOCATION
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      New York, USA
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(0,102,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Briefcase color="#0066FF" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      JOB TYPE
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Full Time
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box sx={{ 
                    width: 64, 
                    height: 64, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    📸
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Instagram
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Social networking service
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Founded in:</strong> March 21, 2006
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Organization type:</strong> Private Company
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Company size:</strong> 120-300 Employees
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Apply Dialog */}
      <Dialog open={applyOpen} onClose={() => setApplyOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Apply Job: Senior UX Designer
          </Typography>
          <IconButton onClick={() => setApplyOpen(false)}>
            <X size={20} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Choose Resume</InputLabel>
            <Select defaultValue="" label="Choose Resume">
              <MenuItem value="">Select...</MenuItem>
              <MenuItem value="resume1">Resume 1.pdf</MenuItem>
              <MenuItem value="resume2">Resume 2.pdf</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Cover Letter
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            placeholder="Write down your biography here. Let the employers know who you are..."
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <IconButton size="small">
              <Bold size={18} />
            </IconButton>
            <IconButton size="small">
              <Italic size={18} />
            </IconButton>
            <IconButton size="small">
              <Underline size={18} />
            </IconButton>
            <IconButton size="small">
              <LinkIcon size={18} />
            </IconButton>
            <IconButton size="small">
              <ListIcon size={18} />
            </IconButton>
            <IconButton size="small">
              <ListOrdered size={18} />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" fullWidth onClick={() => setApplyOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" fullWidth endIcon={<ArrowRight />}>
              Apply Now
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default JobDetails;
