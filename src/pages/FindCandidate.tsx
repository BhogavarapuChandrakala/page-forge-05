import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  TextField,
  InputAdornment,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  Breadcrumbs,
  Link,
  Avatar,
  Checkbox,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Category,
  FilterList,
  GridView,
  ViewList,
  ExpandMore,
  NavigateNext,
  ArrowForward,
  BookmarkBorder,
  Bookmark,
  WorkOutline,
} from '@mui/icons-material';

const candidates = [
  { id: 1, name: 'Cody Fisher', title: 'Marketing Officer', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 2, name: 'Darrell Steward', title: 'Interaction Designer', location: 'New York', experience: '3 Years experience', bookmarked: true },
  { id: 3, name: 'Guy Hawkins', title: 'Senior Graphic Designer', location: 'New York', experience: '3 Years experience', bookmarked: true },
  { id: 4, name: 'Jane Cooper', title: 'Senior UX Designer', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 5, name: 'Theresa Webb', title: 'Front End Developer', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 6, name: 'Kathryn Murphy', title: 'Technical Support Specialist', location: 'New York', experience: '3 Years experience', bookmarked: true },
  { id: 7, name: 'Marvin McKinney', title: 'UI/UX Designer', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 8, name: 'Jenny Wilson', title: 'Marketing Manager', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 9, name: 'Leslie Alexander', title: 'Project Manager', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 10, name: 'Wade Warren', title: 'Software Engineer', location: 'New York', experience: '3 Years experience', bookmarked: false },
  { id: 11, name: 'Courtney Henry', title: 'Visual Designer', location: 'New York', experience: '3 Years experience', bookmarked: true },
];

const FindCandidate = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [locationRadius, setLocationRadius] = useState(32);
  const [candidateLevel, setCandidateLevel] = useState('mid');
  const [experience, setExperience] = useState('4-6');
  const [education, setEducation] = useState<string[]>(['graduation']);
  const [gender, setGender] = useState('male');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <Box sx={{ bgcolor: 'grey.50', py: 3, borderBottom: 1, borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Typography color="text.primary">Find Employers</Typography>
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>Find Employers</Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Job title, Keyword..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  startAdornment={
                    <InputAdornment position="start">
                      <Category />
                    </InputAdornment>
                  }
                  defaultValue=""
                >
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="tech">Technology</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button variant="contained" fullWidth sx={{ height: '56px' }}>
                Find Job
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              startIcon={<FilterList />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Filter
            </Button>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Location Radius</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="primary" sx={{ mb: 1 }}>
                  {locationRadius} miles
                </Typography>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={locationRadius}
                  onChange={(e) => setLocationRadius(Number(e.target.value))}
                  style={{ width: '100%' }}
                />
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Candidate Level</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup value={candidateLevel} onChange={(e) => setCandidateLevel(e.target.value)}>
                  <FormControlLabel value="entry" control={<Radio />} label="Entry Level" />
                  <FormControlLabel value="mid" control={<Radio />} label="Mid Level" />
                  <FormControlLabel value="expert" control={<Radio />} label="Expert Level" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Experiences</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup value={experience} onChange={(e) => setExperience(e.target.value)}>
                  <FormControlLabel value="fresher" control={<Radio />} label="Fresher" />
                  <FormControlLabel value="1-2" control={<Radio />} label="1 - 2 Years" />
                  <FormControlLabel value="2-4" control={<Radio />} label="2 - 4 Years" />
                  <FormControlLabel value="4-6" control={<Radio />} label="4 - 6 Years" />
                  <FormControlLabel value="6-8" control={<Radio />} label="6 - 8 Years" />
                  <FormControlLabel value="8-10" control={<Radio />} label="8 - 10 Years" />
                  <FormControlLabel value="10-15" control={<Radio />} label="10 - 15 Years" />
                  <FormControlLabel value="15+" control={<Radio />} label="15+ Years" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {['All', 'High School', 'Intermediate', 'Graduation', 'Master Degree', 'Bachelor Degree'].map((level) => (
                  <Box key={level} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Checkbox
                      checked={education.includes(level.toLowerCase().replace(' ', '-'))}
                      onChange={(e) => {
                        const val = level.toLowerCase().replace(' ', '-');
                        if (e.target.checked) {
                          setEducation([...education, val]);
                        } else {
                          setEducation(education.filter((ed) => ed !== val));
                        }
                      }}
                    />
                    <Typography>{level}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight={600}>Gender</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="others" control={<Radio />} label="Others" />
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select defaultValue="latest">
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select defaultValue="12">
                    <MenuItem value="12">12 per page</MenuItem>
                    <MenuItem value="24">24 per page</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <IconButton
                  color={viewMode === 'grid' ? 'primary' : 'default'}
                  onClick={() => setViewMode('grid')}
                >
                  <GridView />
                </IconButton>
                <IconButton
                  color={viewMode === 'list' ? 'primary' : 'default'}
                  onClick={() => setViewMode('list')}
                >
                  <ViewList />
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {candidates.map((candidate, index) => (
                <Card
                  key={candidate.id}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    border: index === 3 ? 2 : 1,
                    borderColor: index === 3 ? 'primary.main' : 'grey.200',
                    '&:hover': {
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ width: 64, height: 64, bgcolor: 'grey.400' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {candidate.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {candidate.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="caption" color="text.secondary">
                              {candidate.location}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <WorkOutline fontSize="small" color="action" />
                            <Typography variant="caption" color="text.secondary">
                              {candidate.experience}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton>
                          {candidate.bookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />}
                        </IconButton>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForward />}
                          onClick={() => navigate(`/candidate/${candidate.id}`)}
                        >
                          View Profile
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'contained' : 'outlined'}
                  sx={{ minWidth: 40 }}
                >
                  {page === 4 ? '04' : page}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default FindCandidate;
