<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns'

// resume url
const RESUME_URL = 'https://beiatrix.s3.us-west-1.amazonaws.com/resume/Beiatrix_Pedrasa_-_Resume.pdf'

// years of experience
const startDate = new Date('2019-05-13T00:00:00')
const yearsOfExperience = computed(() => {
  const totalExperience = parseFloat(formatDistanceToNowStrict(startDate, {
    addSuffix: false,
    unit: 'year',
    roundingMethod: 'floor'
  }))
  return `${totalExperience}+ years`
})
</script>

<template>
  <AppSection
    img-classes="h-12 mb-8"
    img-url="/images/career.svg"
    title="career"
  >
    <div class="grid gap-4">
      <p>
        I'm a software engineer with <span class="font-semibold">{{ yearsOfExperience }}</span> 
        of professional experience and a background in design.
      </p>
      <p>
        I specialize in frontend development using Javascript frameworks (Vue, React, Angular) with the versatility to contribute across the stack.
      </p>
      <p>
        On the design side, I bring over a decade of experience with the Adobe suite (XD, Photoshop, InDesign, Illustrator), and proficiency in Figma, Procreate, and Final Cut Pro X.
      </p>
      <p>
        I am committed to continuous learning and growth to stay current with evolving technologies, including the thoughtful adoption of AI.
      </p>
      <p>
        I work effectively in collaborative, cross-functional teams. I partner closely with Product and Engineering team members to translate business needs into scalable, maintainable systems and delightful user experiences.
      </p>
      <p>
        My goal is to live my day-to-day life building great things with kind and smart people. By doing my best every day to communicate intentionally, craft clean and readable code, provide thorough peer reviews, and strengthen team knowledge with great documentation, I am dedicated to elevating the entire team.
      </p>
      <p>
        If you'd like to learn more, here is my <span class="font-semibold">
          <a
            class="underline text-primary"
            :href="RESUME_URL"
            target="_blank"
          >
            resume</a>
        </span>.
      </p>
    </div>
    <div class="flex justify-center py-4">
      <AppButton 
        :href="RESUME_URL"
        target="_blank"
      >
        Download Resume
      </AppButton>
    </div>
  </AppSection>
</template>
