<template>
    <div>
        <Hero choreEntry="Chore Detail" />
        <section class="container text-left">
            <header class=""> 
                <h2 class="h4 text-uppercase mb-0 pb-0">I am looking for a dog walker.</h2>
                <p class="my-0 py-0 d-flex justify-content-between">
                    <small>Bulawayo, Parklands | 21 July 2019</small><small><b>Posted</b> :: 2 minutes ago</small>
                </p>                
                <h4 class="h6">By: <span class="text-uppercase">Alan Walker</span>   </h4>
                <p class="mt-0 p-0">Budget: $47</p>
            </header>
            <hr>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsam distinctio veritatis tenetur quasi aut. Commodi nihil id, laborum sunt dignissimos est aliquam. Delectus ex repellat aut placeat quia! Voluptates.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vero aliquid animi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est atque quasi repellat. Enim quis illo totam tempora inventore minus sapiente officiis rem molestias fugiat, eius placeat cumque facilis doloribus!</p>
            </article>
            <hr>
            <button class="btn btn-sm-outline btn-success" data-toggle="modal" data-target="#placeBid">Place a Bid</button>
        </section>
        <section class="container">
            <hr>
            <h4>Similar Chores</h4>
            <hr>
            <div class="card-columns">
                <chore
                v-for="_chore in chores"
                :title="_chore.title"
                :location="_chore.location"
                :dateTime="_chore.dateTime"
                :message="_chore.message"
                :budget="_chore.budget"
                :posted="_chore.posted"
                :bids="_chore.bids"
                :status="_chore.status"
                :choreId="_chore.choreId"
                :key="_chore.title"
                ></chore>
            </div>
        </section>
        <!-- Bid Modal -->
        <place-bid
            :showModal="showModal" 
        ></place-bid>
    </div>
</template>


<script>
// @ is an alias to /src
import Hero from "@/components/chores/hero.vue";
import Chore from "@/components/chores/chore.vue";
import placeBid from '@/components/chores/placeBid.vue'
export default {    
    data(){
        return {
            showModal: false,
            chores:[
                {
                title: "Need Help Gardening",
                location: "Gweru, Mkoba 2",
                dateTime: "03/06/2019  10:30",
                budget: 82,
                message: "lorem This card has a regular title and short paragraph of text below it. This card has a regular title and short paragraph of text below it.",
                posted: "2 days ago",
                bids: 5,
                status: "Open",
                choreId: '1'
                },
                {
                title: "Take my Dog for a Walk",
                location: "Bulawayo, Parklands",
                dateTime: "01/06/2019  09:00",
                budget: 45,
                message: "I need someone to walk my dod around for at least an hour. Its been long it needs to exercice. You must be a dog lover",
                posted: "2 seconds ago",
                bids: 0,
                status: "Open",
                choreId: '2'
                },
                {
                title: "Need  Killer Party Organiser",
                location: "Harare, Gendale",
                dateTime: "03/06/2019  10:30",
                budget: 30,
                message: "lorem This card has a regular title and short paragraph of text below it. This card has a regular title and short paragraph of text below it.",
                posted: "2 days ago",
                bids: 25,
                status: "Open",
                choreId: '3'
                }
            ]
        }
    },
    components: {
        Hero,
        Chore,
        placeBid
    }
}
</script>