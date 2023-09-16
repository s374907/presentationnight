<script>   
    import Title from "../slides/title.svelte";
    import Titlepic from "../slides/titlepic.svelte";
    import Fullimage from "../slides/fullimage.svelte";

    $: outerWidth = 900;
    let page = 1
    function onKeyDown(e){
        if(e.keyCode == 39){
            page += 1
        }
        if(e.keyCode == 37  && (page-1) != 0){
            page -= 1
        }
    }
</script>

<svelte:window 
bind:outerWidth
on:keydown|preventDefault={onKeyDown} 
/>

{#if outerWidth > 800}
<div class="color black">
<h1 class="fixed bold top-5 left-5 z-50 text-white">Slide {page}</h1>
</div>
<main class="relative overflow-hidden ">

{#if page <= 1}
<Title title="Fabian's amazing presentation"></Title>
{/if}

{#if page == 2}
<Titlepic title="The entire history of jojo" src='images/jojo_logo.jpg'/>
{/if}

{#if page == 3}
<Fullimage src='images/stonemask.png'></Fullimage>
{/if}

</main>

{:else}
<div class="mt-10">
        <h1 class="text-xl font-bold text-center center text-white">
            You should listen to my presentation instead of being on your phone dummy
        </h1>
</div>
{/if} 

  <style lang="postcss">
    main{
        margin-top: -24px;
    }
    :global(html,body){height:100%;}
    :global(body) {
        background: #F15156;
        background: linear-gradient(90deg, #F15156 0%,#721121 100%);
        overflow-y: hidden;
        float: none !important;margin: 0 auto !important;
    }
  </style>