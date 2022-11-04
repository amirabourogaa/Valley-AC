import React from 'react'
import Slider from '../../components/slider/Slider'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import CastForEducationIcon from '@mui/icons-material/CastForEducation'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import VerifiedIcon from '@mui/icons-material/Verified'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import Typography from '@mui/material/Typography'
import ExcCourses from '../../components/exclusivity/ExcCourses'

const Home = () => {
  return (
    <div>
      <Slider />
      <ExcCourses/>
      <Timeline style={{padding:"8%"}} position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <CastForEducationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              En ligne
            </Typography>
            <Typography>
              Des Formations accessibles à vie depuis votre ordinateur, tablette
              et mobile
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary'>
              <PublishedWithChangesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              + de 10.000 étudiant(e)s satifisfait(e)s
            </Typography>
            <Typography>
              Nous recherchons le 100% de satisfactions grâce à des formations
              et un service de qualité
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <VerifiedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              Formations de qualités
            </Typography>
            <Typography>
              Le centre de formation est certifié et reconnu par 2 Organismes
              internationaux
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color='secondary'>
              <AccessibilityNewIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              Bienvenue
            </Typography>
            <Typography>Commencez votre formation</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>


   
    </div>
  )
}

export default Home
