<svelte:head>
	<title>Property Details</title>
</svelte:head>

<script>
    import propertydetails from "../../assets/propertydetails.svg"
</script> 

<div class="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-blackFade bg-[#FCFCFD]">
    <div class="mr-20">
        <h1 class="text-2xl mb-5 font-medium">Property Details</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div class="pt-10">
            <form class="space-y-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label for="propertyName" class="input-label">Property Name</label>
                    <input class="py-2 px-3 input-test" id="propertyName" type="text" placeholder="">
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label for="address" class="input-label">Address</label>
                    <input class="py-2 px-3 input-test" id="address" type="text" placeholder="">
                </div>
            </form>
        </div>
    </div>
    <div>
		<img src={propertydetails} alt="">
	</div>
</div>

<style>
    .input-test {
        width: 25.625rem;
        height: 3rem;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid #C3C1D7;
        background: #FFF;
    }
    .input-label {
        color: #35344C;
        /* Body Bold */
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.32px
    }
</style>