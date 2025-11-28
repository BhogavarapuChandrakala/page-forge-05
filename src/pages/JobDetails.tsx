import { Container, Box, Typography, Button, Chip, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { MapPin, Clock, Bookmark, ArrowRight, ArrowLeft, Briefcase, DollarSign, Calendar, X, Bold, Italic, Underline, Link as LinkIcon, List as ListIcon, ListOrdered } from 'lucide-react';
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import { Facebook, Twitter, Pinterest, Instagram as InstagramIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import AuthHeader from '@/components/AuthHeader';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [applyOpen, setApplyOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const relatedJobs = [
    {
      id: 'r1',
      company: 'Freepik',
      title: 'Visual Designer',
      location: 'China',
      type: 'Full Time',
      salary: '$10K-$15K',
      tag: 'Featured',
      logo: 'FP',
      logoBg: '#3558F4',
    },
    {
      id: 'r2',
      company: 'Upwork',
      title: 'Technical Support Specialist',
      location: 'France',
      type: 'Full Time',
      salary: '$35K-$40K',
      logo: 'Up',
      logoBg: '#4ADE80',
    },
    {
      id: 'r3',
      company: 'Facebook',
      title: 'Software Engineer',
      location: 'United Kingdom',
      type: 'Part Time',
      salary: '$15K-$20K',
      logo: 'f',
      logoBg: '#2563EB',
    },
    {
      id: 'r4',
      company: 'Microsoft',
      title: 'Product Designer',
      location: 'Australia',
      type: 'Full Time',
      salary: '$40K-$50K',
      logo: 'ms',
      logoBg: '#F97316',
    },
    {
      id: 'r5',
      company: 'Youtube',
      title: 'Interaction Designer',
      location: 'Germany',
      type: 'Full Time',
      salary: '$20K-$25K',
      logo: 'YT',
      logoBg: '#EF4444',
    },
    {
      id: 'r6',
      company: 'Dribbble',
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full Time',
      salary: '$60K-$90K',
      logo: 'Db',
      logoBg: '#EC4899',
    },
    {
      id: 'r7',
      company: 'Behance',
      title: 'UI/UX Specialist',
      location: 'Netherlands',
      type: 'Contract Base',
      salary: '$40K-$70K',
      logo: 'Be',
      logoBg: '#3B82F6',
    },
    {
      id: 'r8',
      company: 'Figma',
      title: 'Design Systems Engineer',
      location: 'USA',
      type: 'Full Time',
      salary: '$90K-$120K',
      logo: 'Fg',
      logoBg: 'linear-gradient(135deg,#22C55E,#EF4444)',
    },
  ];

  return (
    <Box>
      <AuthHeader />
      
      {/* Page heading + breadcrumb — centered container with spacing like the design */}
      <Box sx={{ bgcolor: 'hsl(220, 40%, 98%)', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Job Details
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Home / Find Job / Graphics & Design / Job Details
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
          <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 3, mb: 4, alignItems: 'flex-start' }}>
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
                <Box sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Senior UX Designer
                  </Typography>
                  <Chip label="Featured" size="small" sx={{ bgcolor: 'rgba(255,193,7,0.1)', color: '#ffc107' }} />
                  <Chip label="Full Time" size="small" color="primary" />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', color: 'text.secondary', mb: 2, fontSize: '0.95rem' }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <LinkIcon size={14} />
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>https://instagram.com</a>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <PhoneIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
                    <a href="tel:+14065550120" style={{ textDecoration: 'none', color: 'inherit' }}> (406) 555-0120</a>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <EmailIcon sx={{ width: 16, height: 16, color: '#6B7280' }} />
                    <a href="mailto:career@instagram.com" style={{ textDecoration: 'none', color: 'inherit' }}>career@instagram.com</a>
                  </Box>
                </Box>
              </Box>
              {/* apply/bookmark moved to right column for screenshot-aligned layout */}
            </Box>

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
                <Box component="ul" sx={{ pl: 3, listStyleType: 'disc', listStylePosition: 'outside', '& li': { mb: 1, color: 'text.secondary' } }}>
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

            {/* share row */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', minWidth: 120 }}>
                Share this job:
              </Typography>
              <Button startIcon={<Facebook />} variant="outlined" size="small">Facebook</Button>
              <Button startIcon={<Twitter />} variant="outlined" size="small">Twitter</Button>
              <Button startIcon={<Pinterest />} variant="outlined" size="small">Pinterest</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Top-right action area: bookmark + Apply button + expiry */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 1 }}>
              <IconButton sx={{ border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
                <Bookmark size={18} />
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

            <Typography variant="body2" sx={{ color: '#DC3545', textAlign: 'right', mb: 2 }}>
              Job expire in: June 30, 2021
            </Typography>

            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Job Overview</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Calendar size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>JOB POSTED</Typography>
                        <Typography sx={{ fontWeight: 600 }}>14 June, 2021</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Clock size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>JOB EXPIRE IN</Typography>
                        <Typography sx={{ fontWeight: 600 }}>14 July, 2021</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Briefcase size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>EDUCATION</Typography>
                        <Typography sx={{ fontWeight: 600 }}>Graduation</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <DollarSign size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>SALARY</Typography>
                        <Typography sx={{ fontWeight: 600 }}>$50k-80k/month</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <MapPin size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>LOCATION</Typography>
                        <Typography sx={{ fontWeight: 600 }}>New York, USA</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Briefcase size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>JOB TYPE</Typography>
                        <Typography sx={{ fontWeight: 600 }}>Full Time</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Clock size={18} />
                      <Box>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>EXPERIENCE</Typography>
                        <Typography sx={{ fontWeight: 600 }}>10-15 Years</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/* removed duplicate right-column detail card (Salary/Expire/Education/Location/Job Type) per request */}

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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: 'linear-gradient(135deg,#E1306C,#F77737)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <InstagramIcon sx={{ color: 'white' }} />
                    </Box>
                    <Box />
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Founded in:</strong> March 21, 2006
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Organization type:</strong> Private Company
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    <strong>Company size:</strong> 120-300 Employers
                  </Typography>

                  <Box sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <PhoneIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>(406) 555-0120</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <EmailIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>twitter@gmail.com</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinkIcon size={16} />
                      <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>https://twitter.com</a>
                    </Box>
                  </Box>

                {/* social icons for the company */}
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <IconButton size="small" aria-label="facebook"><Facebook sx={{ color: '#1877F2' }} /></IconButton>
                  <IconButton size="small" aria-label="twitter"><Twitter sx={{ color: '#1DA1F2' }} /></IconButton>
                  <IconButton size="small" aria-label="instagram"><InstagramIcon sx={{ color: '#E1306C' }} /></IconButton>
                  <IconButton size="small" aria-label="youtube"><YouTubeIcon sx={{ color: '#FF0000' }} /></IconButton>
                </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Related Jobs */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 12 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Related Jobs
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <ArrowLeft size={16} />
            </IconButton>
            <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <ArrowRight size={16} />
            </IconButton>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {relatedJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: '0 12px 35px rgba(15, 23, 42, 0.05)' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: job.logoBg,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: 16,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textTransform: 'uppercase',
                        }}
                      >
                        {job.logo}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {job.company}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                          <MapPin size={14} />
                          <Typography variant="body2">{job.location}</Typography>
                        </Box>
                      </Box>
                    </Box>
                    {job.tag && (
                      <Chip
                        label={job.tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(248, 113, 113, 0.15)',
                          color: '#F97316',
                          height: 26,
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {job.type} • {job.salary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
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

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Or upload a new resume
            </Typography>
            <Button variant="outlined" component="label" size="small">
              Upload File
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
              />
            </Button>
          </Box>

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

    </Box>
  );
};

export default JobDetails;
