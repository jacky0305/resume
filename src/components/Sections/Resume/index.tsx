import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="PROJECTS">
          <p className="pb-8">”Do Professional Baseball Players Play Mixed Strategies? Evidence from MLB” (with Wei-Chien Weng and Shiang-Hung Hu, <a href="https://drive.google.com/file/d/10N-pj6Ln1ejisUUNnefph59SgcRpRh-j/view">PDF</a>)</p>
          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div> */}
        </ResumeSection>
        <ResumeSection title="SKILLS">
        <h2 className="text-xl font-bold">Data Analysis</h2>
        <div className='skills'>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">R</div>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">Stata</div>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">Python</div>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">SQL</div>
        </div>
        

        <h2 className="text-xl font-bold">Front End</h2>
        
        <div className='skills'>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">Css</div>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">Javascript</div>
        </div>

        <h2 className="text-xl font-bold">Others</h2>
        <div className='skills'>
        <div className="rounded-full border-2 py-2 px-4 text-sm font-medium sm:text-base border-orange-500 ring-orange-500 skill">Latex</div>
        </div>
  
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
