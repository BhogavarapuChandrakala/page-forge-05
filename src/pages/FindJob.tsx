import { Container, Box, Typography, TextField, Button, Chip, Select, MenuItem, FormControl, InputLabel, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, RadioGroup, FormControlLabel, Radio, Checkbox, Grid, ToggleButtonGroup, ToggleButton, InputAdornment } from '@mui/material';
import { Search, MapPin, Layers, Filter, Grid3x3, List, Bookmark, ArrowRight, Clock, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindJob = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    keywords: '',
    location: '',
    category: '',
    experience: '4-6',
    salary: '6000-8000',
    jobType: ['full-time'],
    education: ['graduation'],
    jobLevel: 'mid-level'
  });

  const jobs = [
    { id: '1', company: 'Reddit', logo: '🔴', logoColor: '#FF4500', title: 'Marketing Officer', location: 'United Kingdom of Great Britain', type: 'Full Time', salary: '$20k-$25k', featured: true, daysRemaining: 4 },
    { id: '2', company: 'Dribbble', logo: '🎨', logoColor: '#EA4C89', title: 'Junior UX Designer', location: 'California', type: 'Full-Time', salary: '$50k-$60k/month', featured: true, remote: true, daysRemaining: 4 },
    { id: '3', company: 'Freepik', logo: '📷', logoColor: '#0077B5', title: 'Visual Designer', location: 'China', type: 'Full Time', salary: '$10k-$15k', featured: true, daysRemaining: 3 },
    { id: '4', company: 'Figma', logo: '🎨', logoColor: '#F24E1E', title: 'UI/UX Designer', location: 'Canada', type: 'Full Time', salary: '$50k-$70k', featured: true, daysRemaining: 5 },
    { id: '5', company: 'Dribbble', logo: '🎨', logoColor: '#EA4C89', title: 'Junior Graphic Designer', location: 'United States', type: 'Temporary', salary: '$35k-$40k', remote: true, daysRemaining: 4 },
    { id: '6', company: 'Twitter', logo: '🐦', logoColor: '#1DA1F2', title: 'Senior UX Designer', location: 'Canada', type: 'Internship', salary: '$50k-$60k', daysRemaining: 3 },
    { id: '7', company: 'Microsoft', logo: '🪟', logoColor: '#00A4EF', title: 'Product Designer', location: 'Australia', type: 'Full Time', salary: '$40k-$50k', daysRemaining: 6 },
    { id: '8', company: 'Upwork', logo: '⬆️', logoColor: '#6FDA44', title: 'Technical Support Specialist', location: 'France', type: 'Full Time', salary: '$35k-$40k', daysRemaining: 4 },
    { id: '9', company: 'Slack', logo: '💬', logoColor: '#4A154B', title: 'Networking Engineer', location: 'Germany', type: 'Remote', salary: '$50k-$90k', daysRemaining: 2 },
    { id: '10', company: 'Instagram', logo: '📸', logoColor: '#E4405F', title: 'Front End Developer', location: 'Australia', type: 'Contract Base', salary: '$50k-$80k', daysRemaining: 3 },
    { id: '11', company: 'Facebook', logo: '👍', logoColor: '#1877F2', title: 'Software Engineer', location: 'United Kingdom of Great Britain', type: 'Part Time', salary: '$15k-$20k', daysRemaining: 4 },
    { id: '12', company: 'Youtube', logo: '▶️', logoColor: '#FF0000', title: 'Interaction Designer', location: 'Germany', type: 'Full Time', salary: '$20k-$25k', daysRemaining: 5 }
  ];

  return (
    <Box>
      <Header />
      
      <Box sx={{ bgcolor: 'hsl(220, 40%, 98%)', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Find Job
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Home / Find job
            </Typography>
          </Box>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField 
                  placeholder="Job title, Keyword..."
                  size="small"
                  sx={{ flex: 1, minWidth: 200 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={20} />
                      </InputAdornment>
                    ),
                  }}
                  value={selectedFilters.keywords}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, keywords: e.target.value })}
                />
                <TextField 
                  placeholder="Location"
                  size="small"
                  sx={{ flex: 1, minWidth: 200 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MapPin size={20} />
                      </InputAdornment>
                    ),
                  }}
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
                />
                <FormControl size="small" sx={{ flex: 1, minWidth: 200 }}>
                  <InputLabel>Select Category</InputLabel>
                  <Select
                    value={selectedFilters.category}
                    label="Select Category"
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, category: e.target.value })}
                    startAdornment={
                      <InputAdornment position="start">
                        <Layers size={20} />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="design">Design</MenuItem>
                    <MenuItem value="development">Development</MenuItem>
                    <MenuItem value="marketing">Marketing</MenuItem>
                  </Select>
                </FormControl>
                <Button 
                  variant="text"
                  startIcon={<Filter />}
                  onClick={() => setFilterOpen(true)}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Advance Filter
                </Button>
                <Button 
                  variant="contained"
                  sx={{ whiteSpace: 'nowrap', px: 4 }}
                >
                  Find Job
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="Design" onDelete={() => {}} />
            <Chip label="New York" onDelete={() => {}} />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Sort by</InputLabel>
              <Select defaultValue="latest" label="Sort by">
                <MenuItem value="latest">Latest</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
                <MenuItem value="salary-high">Highest Salary</MenuItem>
                <MenuItem value="salary-low">Lowest Salary</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Per page</InputLabel>
              <Select defaultValue="12" label="Per page">
                <MenuItem value="12">12 per page</MenuItem>
                <MenuItem value="24">24 per page</MenuItem>
                <MenuItem value="48">48 per page</MenuItem>
              </Select>
            </FormControl>

            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(e, newMode) => newMode && setViewMode(newMode)}
              size="small"
            >
              <ToggleButton value="grid">
                <Grid3x3 size={20} />
              </ToggleButton>
              <ToggleButton value="list">
                <List size={20} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        {viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {jobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0,102,255,0.15)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ fontSize: '2rem' }}>{job.logo}</Box>
                        <Box>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.5 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {job.company}
                            </Typography>
                            {job.featured && (
                              <Chip label="Featured" size="small" sx={{ bgcolor: 'rgba(255,193,7,0.1)', color: '#ffc107', height: 20 }} />
                            )}
                          </Box>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MapPin size={14} />
                            {job.location}
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton size="small">
                        <Bookmark size={18} />
                      </IconButton>
                    </Box>

                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {job.title}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {job.type} • {job.salary}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                          <Clock size={14} />
                          {job.daysRemaining} Days Remaining
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {jobs.map((job) => (
              <Card 
                key={job.id}
                sx={{ 
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,102,255,0.15)',
                  }
                }}
                onClick={() => navigate(`/job/${job.id}`)}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                      <Box sx={{ fontSize: '2.5rem' }}>{job.logo}</Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {job.title}
                          </Typography>
                          {job.featured && (
                            <Chip label="Featured" size="small" sx={{ bgcolor: 'rgba(255,193,7,0.1)', color: '#ffc107', height: 22 }} />
                          )}
                          {job.remote && (
                            <Chip label="Remote" size="small" sx={{ bgcolor: 'rgba(76,175,80,0.1)', color: '#4caf50', height: 22 }} />
                          )}
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                          <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                          {job.location} • {job.salary} • <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} />{job.daysRemaining} Days Remaining
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <IconButton size="small">
                        <Bookmark size={20} />
                      </IconButton>
                      <Button variant="outlined" endIcon={<ArrowRight size={16} />}>
                        Apply Now
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          <Button variant="outlined" size="small">Previous</Button>
          <Button variant="contained" size="small">01</Button>
          <Button variant="outlined" size="small">02</Button>
          <Button variant="outlined" size="small">03</Button>
          <Button variant="outlined" size="small">04</Button>
          <Button variant="outlined" size="small">05</Button>
          <Button variant="outlined" size="small">Next</Button>
        </Box>
      </Container>

      {/* Advanced Filter Dialog */}
      <Dialog open={filterOpen} onClose={() => setFilterOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField placeholder="Job title, Keyword..." size="small" sx={{ minWidth: 200 }} />
            <TextField placeholder="Location" size="small" sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel>Select Category</InputLabel>
              <Select defaultValue="" label="Select Category">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="design">Design</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="text" onClick={() => setFilterOpen(false)}>Advance Filter</Button>
            <Button variant="contained">Find Job</Button>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={2.4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Experience
              </Typography>
              <RadioGroup value={selectedFilters.experience} onChange={(e) => setSelectedFilters({ ...selectedFilters, experience: e.target.value })}>
                <FormControlLabel value="freshers" control={<Radio />} label="Freshers" />
                <FormControlLabel value="1-2" control={<Radio />} label="1 - 2 Years" />
                <FormControlLabel value="2-4" control={<Radio />} label="2 - 4 Years" />
                <FormControlLabel value="4-6" control={<Radio />} label="4 - 6 Years" />
                <FormControlLabel value="6-8" control={<Radio />} label="6 - 8 Years" />
                <FormControlLabel value="8-10" control={<Radio />} label="8 - 10 Years" />
                <FormControlLabel value="10-15" control={<Radio />} label="10 - 15 Years" />
                <FormControlLabel value="15+" control={<Radio />} label="15+ Years" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Salary
              </Typography>
              <RadioGroup value={selectedFilters.salary} onChange={(e) => setSelectedFilters({ ...selectedFilters, salary: e.target.value })}>
                <FormControlLabel value="50-1000" control={<Radio />} label="$50 - $1000" />
                <FormControlLabel value="1000-2000" control={<Radio />} label="$1000 - $2000" />
                <FormControlLabel value="3000-4000" control={<Radio />} label="$3000 - $4000" />
                <FormControlLabel value="4000-6000" control={<Radio />} label="$4000 - $6000" />
                <FormControlLabel value="6000-8000" control={<Radio />} label="$6000 - $8000" />
                <FormControlLabel value="8000-10000" control={<Radio />} label="$8000 - $10000" />
                <FormControlLabel value="10000-15000" control={<Radio />} label="$10000 - $15000" />
                <FormControlLabel value="15000+" control={<Radio />} label="$15000+" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Job Type
              </Typography>
              <FormControlLabel control={<Checkbox />} label="All" />
              <FormControlLabel control={<Checkbox checked />} label="Full Time" />
              <FormControlLabel control={<Checkbox />} label="Part Time" />
              <FormControlLabel control={<Checkbox />} label="Internship" />
              <FormControlLabel control={<Checkbox />} label="Remote" />
              <FormControlLabel control={<Checkbox />} label="Temporary" />
              <FormControlLabel control={<Checkbox />} label="Contract Base" />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Education
              </Typography>
              <FormControlLabel control={<Checkbox />} label="All" />
              <FormControlLabel control={<Checkbox />} label="High School" />
              <FormControlLabel control={<Checkbox />} label="Intermediate" />
              <FormControlLabel control={<Checkbox checked />} label="Graduation" />
              <FormControlLabel control={<Checkbox />} label="Master Degree" />
              <FormControlLabel control={<Checkbox />} label="Bachelor Degree" />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Job Level
              </Typography>
              <RadioGroup value={selectedFilters.jobLevel} onChange={(e) => setSelectedFilters({ ...selectedFilters, jobLevel: e.target.value })}>
                <FormControlLabel value="entry" control={<Radio />} label="Entry Level" />
                <FormControlLabel value="mid-level" control={<Radio />} label="Mid Level" />
                <FormControlLabel value="expert" control={<Radio />} label="Expert Level" />
              </RadioGroup>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default FindJob;
