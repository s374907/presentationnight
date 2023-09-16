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
<Titlepic title="The entire history of jojo (from my memory)" src='images/part1/jojo_logo.jpg'/>
{/if}

{#if page == 3}
<Fullimage src='images/part1/stonemask.png'></Fullimage>
{/if}

{#if page == 4}
<Titlepic title="Part 1: Phantom blood"src='images/part1/phantom_blood.jpg'/>
{/if}

{#if page == 5}
<Fullimage src='images/part1/George.webp'/>
{/if}

{#if page == 6}
<Fullimage src='images/part1/Brando_dying.webp'/>
{/if}

{#if page == 7}
<Fullimage src='images/part1/jonathan.jpg_large'/>
{/if}

{#if page == 8}
<Fullimage src='images/part1/danny.jpg'/>
{/if}

{#if page == 9}
<Fullimage src='images/part1/Dio_and_jojo.webp'/>
{/if}

{#if page == 10}
<Fullimage src='images/part1/danny_die.jpg'/>
{/if}

{#if page == 11}
<Fullimage src='images/part1/danny_burn.jpg'/>
{/if}

{#if page == 12}
<Fullimage src='images/part1/dio_kiss.jpg'/>
{/if}

{#if page == 13}
<Fullimage src='images/part1/dio_father.webp'/>
{/if}

{#if page == 14}
<Fullimage src='images/part1/dio_mask.jpg'/>
{/if}

{#if page == 15}
<Fullimage src='images/part1/zeppeli.jpg'/>
{/if}

{#if page == 16}
<Fullimage src='images/part1/punch_frog.jpg'/>
{/if}

{#if page == 17}
<Fullimage src='images/part1/dio_dies.webp'/>
{/if}
{#if page == 18}
<Fullimage src='images/part1/sailing_to_america.jpg'/>
{/if}

{#if page == 19}
<Fullimage src='images/part1/dio_fight.jpg'/>
{/if}

{#if page == 20}
<Fullimage src='images/part1/jonathan_dies.jpg'/>
{/if}

{#if page == 21}
<Fullimage src='images/part1/Erina_escapes.jpg'/>
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
    :global(html,body){height:120%;}
    :global(body) {
        background: #F15156;
        background: linear-gradient(90deg, #F15156 0%,#721121 100%);
        overflow-y: hidden;
        float: none !important;margin: 0 auto !important;
    }
  </style>