import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Blog = () => {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({
        email: "",
        subject:"",
        message: "",
      })
      const { email, subject, message } = data
      const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value })
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await fetch("https://v1.nocodeapi.com/shiva167/google_sheets/gzlxFKdzQGnmvdff?tabId=Sheet1", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[email,subject, message]]),
          })
          setSubmitted(true);
          setData({
              email: "",
              subject:"",
              message: "",
          });

          // Display a success toast notification
          toast.success('Successfully Submitted.');

        } catch (err) {
          console.log(err)
        }
      }
      
      
   

  return (
<>





<section class="mt-16">
  <div class="py-8 lg:py-16 px-4 bg-[#FFFADC]  mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#CF3032]  dark:text-white">Write a Blog Post</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue or Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    
        <form class="space-y-8" onSubmit={handleSubmit}>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" value={email} onChange={handleChange}  id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" value={subject} onChange={handleChange}  name='subject' id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" value={message}  onChange={handleChange}  rows="4" name='message' class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {/* <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-danger-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
          <div class="flex justify-center items-center">

          <button type="submit" class="text-white bg-gradient-to-r  w-1/2 rounded-full bg-[#CF3032]   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-sm px-5 py-2 text-center me-2">Submit</button>
     
     </div> </form>
     <ToastContainer />
  </div>
  
</section>



<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
<h2 class=" text-4xl tracking-tight font-extrabold text-left mb-5 mt-4 text-[#CF3032]  dark:text-white">What's trending</h2>
    <div class="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-4 gap-10">
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://c.ndtvimg.com/2023-02/egi0l8i_ice-cream_625x300_17_February_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Mixed Fruit IceCream
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">7</span>
                        <small>Jan</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Beat the Heat with TasteTracker's Mixed Fruit Ice Cream! ☀️</a>
                <p class="text-gray-500 text-sm mt-3">
                Just had the Mixed Fruit Ice Cream at Taste Tracker and WOW!  Juicy chunks of strawberries, pineapple, and mango in creamy vanilla ice cream. Perfect summer treat - refreshing and delicious!  #HighlyRecommend #BeatTheHeat</p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
      
            </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">
            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm  hover:text-[#CF3032] hover:bg-white transition duration-500 ease-in-out">
                    Chocolate cake
                    </div>
                </a>




<a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">22</span>
                        <small>Jan</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Divine Chocolate Cake at Taste Tracker</a>
                <p class="text-gray-500 text-sm mt-3">This cake is a chocoholic's dream! Rich, moist layers with a decadent frosting. Every bite is pure heaven. Don't skip dessert - you won't regret it! #WorthTheCalories #ChocolateDream #TasteTracker</p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
      
            </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://images.unsplash.com/photo-1599307767316-776533bb941c?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Grilled Meat
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">5</span>
                        <small>Feb</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Carnivore's Dream: The Grilled Flank Steak at Taste Tracker</a>
                <p class="text-gray-500 text-sm">
Just had the grilled flank steak at Taste Tracker and WOW! Perfectly cooked, juicy on the inside and a beautiful char on the outside. The chimichurri sauce was the perfect finishing touch. Highly recommend for any grill fan! #SupportLocal #WorthTheHype
                </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
      
            </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://c.ndtvimg.com/2024-02/e26pu9d_chicken-popcorn_625x300_26_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Chicken Popcorn
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">18</span>
                        <small>Mar</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] mb-3 transition duration-500 ease-in-out"> Chicken Popcorn Perfection at TasteTracker</a>
                <p class="text-gray-500 text-sm">Let's talk cravings. Taste Tracker's chicken popcorn is the ultimate cure! Crispy, juicy chicken in every bite, with the perfect amount of seasoning. Plus, their dipping sauces are next-level. My go-to order for a satisfying snack or appetizer. Don't miss out! #ChickenPopcornLove #TasteTracker </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
               </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

<a href="#"></a>
<div class="relative">
    <a href="#">
        <img class="w-full"
            src="https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"/>
        <div
            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
    </a>
    <a href="#!">
        <div
            class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
            Omlette
        </div>
    </a>

    <a href="!#">
        <div
            class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
            <span class="font-bold">24</span>
            <small>March</small>
        </div>
    </a>
</div>
<div class="px-6 py-4">

    <a href="#"
        class="font-semibold text-lg inline-block  hover:text-[#CF3032] transition duration-500 ease-in-out">Omlette Obsessed! Taste Tracker's Denver Omelette is a Must-Try!</a>
    <p class="text-gray-500 text-sm mt-2">
    Fluffy eggs, perfectly cooked ham and peppers, and melted cheese? Sign me up!  This omelette is the perfect balance of savory and satisfying. Can't wait to come back and try their other creations!  #OmletteLove #Taste Tracker
    </p>
</div>
<div class="px-6 py-4 flex flex-row items-center">
</div>
</div> <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://c.ndtvimg.com/2021-11/ckqd18a_gulab-jamun_625x300_03_November_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Gulab Jamun
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">2</span>
                        <small>Apr</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Sweet Dreams are Made of Gulab Jamuns at Taste Tracker</a>
                <p class="text-gray-500 text-sm mt-2">
                Just had the Gulab Jamuns at Taste Tracker and WOW! Fluffy, warm Jamuns bathed in a perfectly spiced cardamom syrup - pure bliss!  The best way to end a fantastic meal. Definitely try them! #GulabJamunLove #MustHaveDessert #TasteTracker</p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
               </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">
            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        Veg roll
                    </div>
                </a>




<a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
                        <span class="font-bold">12</span>
                        <small>Apr</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out mb-3">Veg Roll Surprise!</a>
                <p class="text-gray-500 text-sm">
                Obsessed with Veg Roll at Taste Tracker! The Spicy Rainbow roll was bursting with fresh flavors and the avocado tempura was pure perfection. Can't wait to try their other veggie creations! #VegRollFan #DeliciouslyHealthy
                </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
                </div>
        </div>
      
        <div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">

<a href="#"></a>
<div class="relative">
    <a href="#">
        <img class="w-full"
            src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"/>
        <div
            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
    </a>
    <a href="#!">
        <div
            class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
        Sandwich
        </div>
    </a>

    <a href="!#">
        <div
            class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
            <span class="font-bold">17</span>
            <small>Apr</small>
        </div>
    </a>
</div>
<div class="px-6 py-4">

    <a href="#"
        class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Savor Every Bite: Taste Tracker's Sandwich Sensation!</a>
    <p class="text-gray-500 text-sm mt-2">
Indulged in the mouthwatering delight at Taste Tracker. The signature sandwich, a symphony of flavors! Crispy bacon, creamy avocado, and tangy aioli nestled between artisanal bread—pure perfection.   </p>
</div>
<div class="px-6 py-4 flex flex-row items-center">
   </div>
</div>
<div class="rounded overflow-hidden shadow-lg bg-[#FFFADC]">
<a href="#"></a>
<div class="relative">
    <a href="#">
        <img class="w-full"
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=620&h=350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"/>
        <div
            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
    </a>
    <a href="#!">
        <div
            class="absolute bottom-0 left-0 bg-[#CF3032] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
            Samosa
        </div>
    </a>




<a href="!#">
        <div
            class="text-sm absolute top-0 right-0 bg-[#CF3032] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#CF3032] transition duration-500 ease-in-out">
            <span class="font-bold">30</span>
            <small>Apr</small>
        </div>
    </a>
</div>
<div class="px-6 py-4">

    <a href="#"
        class="font-semibold text-lg inline-block hover:text-[#CF3032] transition duration-500 ease-in-out">Samosa Perfection at Taste Tracker</a>
    <p class="text-gray-500 text-sm mt-2">
Just had the samosas at Taste Tracker and wow! The crust was flaky and light, and the filling was bursting with flavor. Perfect balance of spices and potatoes. Must-try for any samosa lover! #TasteTracker #SamosaLove
    </p>
</div>
<div class="px-6 py-4 flex flex-row items-center">
  </div>
</div>

    </div>
</div>
</>
  );
};

export default Blog;
