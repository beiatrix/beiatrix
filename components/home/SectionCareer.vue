<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns'

// resume url
const RESUME_URL = 'https://beiatrix.s3.us-west-1.amazonaws.com/resume/Beiatrix_Pedrasa_-_Resume.pdf'

// years of experience
const startDate = new Date('2019-05-13T00:00:00')
const yearsOfExperience = computed(() => {
  const totalExperience = parseFloat(formatDistanceToNowStrict(startDate, {
    addSuffix: false,
    unit: 'year'
  }))
  return `${totalExperience} years`
})
</script>

<template>
  <AppSection
    img-classes="h-12 mb-8"
    img-url="/images/career.svg"
    title="career"
  >
    <p class="mb-4">
      I have <span class="font-semibold">{{ yearsOfExperience }}</span> of professional
      experience in software engineering with a specialization in frontend
      development.
    </p>
    <p class="mb-4">
      Before software engineering, I was a graphic designer and illustrator with
      <span class="font-semibold">2.5 years</span> of professional experience.
    </p>
    <p class="mb-4">
      I find joy in being able to use both skill sets. I continue to apply my
      design skills to deliver delightful UI and UX in my daily work.
    </p>
    <p class="mb-4">
      If you'd like to learn more, here is my <span class="font-semibold">
        <a
          class="underline text-primary"
          :href="RESUME_URL"
          target="_blank"
        >
          resume</a>
      </span>.
    </p>
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
