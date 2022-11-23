<svelte:head>
	<script src="https://kit.fontawesome.com/d014b12f54.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
  import EducationList from "../components/EducationList.svelte"
	import Header from "../components/Header.svelte"
	import InternshipList from "../components/InternshipList.svelte"
	import Other from "../components/Other.svelte"
	import ProjectList from "../components/ProjectList.svelte"
	import SkillList from "../components/SkillList.svelte"
	import WorkList from "../components/WorkList.svelte"

  import content from "../constants/content.json"
	import "../styles/resume.css";
	import "../styles/paper.css";

  const {
    name,
    contact,
    education,
    work,
    internship,
    skills,
    projects,
    other
  } = content
</script>

<section class="sheet resume">
	<Header name={name} contact={contact} />
  <div class="spacer"></div>
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
