<script>   
    import Title from "../slides/title.svelte";
    import Titlepic from "../slides/titlepic.svelte";
    import Fullimage from "../slides/fullimage.svelte";
    $: outerWidth = 900;
    let page = 1
    function onKeyDown(e){
        if(e.keyCode == 39 && (page+1) != 64){
            page += 1
        }else if((page+1) == 64){
            page = 1
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

{#if page == 22}
<Titlepic title="Part 2: Battle Tendency"src='images/part2/part2_logo.webp'/>
{/if}

{#if page == 23}
<Fullimage src='images/part2/pillar_men.png'/>
{/if}

{#if page == 24}
<Fullimage src='images/part2/JoJoNazis.webp'/>
{/if}


{#if page == 25}
<Fullimage src='images/part2/joseph.jpg'/>
{/if}


{#if page == 26}
<Fullimage src='images/part2/pillarman.png'/>
{/if}


{#if page == 27}
<Fullimage src='images/part2/shotglass_deflect.png'/>
{/if}


{#if page == 28}
<Fullimage src='images/part2/joseph_to_mexico.jpg'/>
{/if}


{#if page == 29}
<Fullimage src='images/part2/joseph_sneaks_in.webp'/>
{/if}


{#if page == 30}
<Fullimage src='images/part2/joseph_training.webp'/>
{/if}


{#if page == 31}
<Fullimage src='images/part2/peeps.png'/>
{/if}


{#if page == 32}
<Fullimage src='images/part2/kars_vulcano.png'/>
{/if}


{#if page == 33}
<Fullimage src='images/part2/nohand.png'/>
{/if}


{#if page == 34}
<Fullimage src='images/part2/redstone.png'/>
{/if}


{#if page == 35}
<Fullimage src='images/part2/kars_outerspace.png'/>
{/if}


{#if page == 36}
<Fullimage src='images/part2/funeral.jpg'/>
{/if}

{#if page == 37}
<Titlepic title="Part 3: Stardust Crusaders" src='images/part3/jojologo.jpg'/>
{/if}

{#if page == 38}
<Fullimage src='images/part3/jotaro_prison.webp'/>
{/if}

{#if page == 39}
<Fullimage src='images/part3/joseph_next.jpg'/>
{/if}


{#if page == 40}
<Fullimage src='images/part3/joseph_camera.jpg'/>
{/if}

{#if page == 41}
<Fullimage src='images/part3/dio_pic.png'/>
{/if}

{#if page == 42}
<Fullimage src='images/part3/punch_frog.jpg'/>
{/if}

{#if page == 43}
<Fullimage src='images/part3/jojostands.png'/>
{/if}

{#if page == 44}
<Fullimage src='images/part3/kak.jpg'/>
{/if}

{#if page == 45}
<Fullimage src='images/part3/polanareff.png'/>
{/if}

{#if page == 46}
<Fullimage src='images/part3/muhammaed.jpg'/>
{/if}

{#if page == 47}
<Fullimage src='images/part3/hummamed_dies.jpg'/>
{/if}

{#if page == 48}
<Fullimage src='images/part3/muhammed_returns.png'/>
{/if}

{#if page == 49}
<Fullimage src='images/part3/avodol_dies_again.png'/>
{/if}

{#if page == 50}
<Fullimage src='images/part3/iggy.jpg'/>
{/if}

{#if page == 51}
<Fullimage src='images/part3/iggy_dies.jpg'/>
{/if}

{#if page == 52}
<Fullimage src='images/part3/dio_and_jotaro.avif'/>
{/if}

{#if page == 53}
<Fullimage src='images/part3/dio_stops_time.webp'/>
{/if}


{#if page == 54}
<Fullimage src='images/part3/jotaro_stops_time.gif'/>
{/if}


{#if page == 55}
<Fullimage src='images/part3/dio_dies.jpg'/>
{/if}


{#if page == 56}
<Fullimage src='images/part3/marine_biologist.jpg'/>
{/if}

{#if page == 57}
<Titlepic title="Part 4: Diamond Is Unbreakable" src='images/part4/jojologo.png'/>
{/if}

{#if page == 58}
<Fullimage src='images/part4/part4.jpg'/>
{/if}

{#if page == 59}
<Titlepic title="Part 5: Golden Wind" src='images/part5/logo.webp'/>
{/if}

{#if page == 60}
<Fullimage src='images/part5/gang.jpg'/>
{/if}


{#if page == 61}
<Fullimage src='images/part5/pineapple.avif'/>
{/if}


{#if page == 62}
<Fullimage src='images/part5/king_crimson.jpg'/>
{/if}

{#if page >= 63}
<Title title="That was all of JoJo"></Title>
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