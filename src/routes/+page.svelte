<svelte:head>
	<script src="https://kit.fontawesome.com/d014b12f54.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
  import EducationList from "../components/EducationList.svelte"
	import Header from "../components/Header.svelte"
	import InternshipList from "../components/InternshipList.svelte"
	import Other from "../components/Other.svelte"
  import ProfileSummary from "../components/ProfileSummary.svelte"
	import ProjectList from "../components/ProjectList.svelte"
	import SkillList from "../components/SkillList.svelte"
	import WorkList from "../components/WorkList.svelte"

  import content from "../constants/content.json"
	import "../styles/resume.css";
	import "../styles/paper.css";

  const {
    name,
    contact,
    profile,
    education,
    work,
    internship,
    skills,
    projects,
    other
  } = content
</script>

<section class="sheet resume">
  <div class="spacer-10"></div>
	<Header name={name} contact={contact} />
  <div class="spacer"></div>
  {#if profile}
    <ProfileSummary header={profile.header} content={profile.content}/>
    <div class="spacer"></div>
  {/if}
	<EducationList header={education.header} content={education.content}/>
  <div class="spacer"></div>
	<WorkList header={work.header} content={work.content}/>
  <div class="spacer"></div>
  {#if internship}
	  <InternshipList header={internship.header} content={internship.content}/>
    <div class="spacer"></div>
  {/if}
	<SkillList header={skills.header} content={skills.content}/>
  <div class="spacer"></div>
	<ProjectList header={projects.header} content={projects.content}/>
  <div class="spacer"></div>
	<Other header={other.header} content={other.content}/>
</section>
