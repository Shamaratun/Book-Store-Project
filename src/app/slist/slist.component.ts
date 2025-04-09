import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slist',
  imports: [FormsModule, CommonModule],
  templateUrl: './slist.component.html',
  styleUrls: ['./slist.component.css']
})
export class SListComponent {
  categories = [
    { value: '2', name: 'All in Fiction Books' },
    { value: '364', name: 'উপন্যাস' },
    { value: '363', name: 'গল্প, কবিতা ও ছড়া' },
    { value: '408', name: 'রহস্য, সায়েন্সফিকশন ও অ্যাডভেঞ্চার' },
    { value: '13', name: 'কমিক, রম্য ও শিশুকিশোর' }
  ];

  books = [
    {
      serial: '01',
      title: 'আমি পদ্মজা',
      author: 'ইলমা বেহরোজ',
      rating: 64,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Ami_Poddoja-Elma_Behrouz-cbb5a-446323.jpg',
      link: '/book/451204'
    },
    {
      serial: '02',
      title: 'আমৃত্যু ভালোবাসি তোকে',
      author: 'সালমা চৌধুরী',
      rating: 76,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/A_Mrithu_valobashi_toka_-Salma_Choudhury-e5d52-445228.jpg',
      link: '/book/445228'
    },
    {
      serial: '03',
      title: 'শামীম হুসাইন: ফ্রিল্যান্সার গড়ার কারিগর',
      author: 'রাহিতুল ইসলাম',
      rating: 260,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shamim_Hussain_Freelancer_Gorar_Karigor-Rahitul_Islam-49e82-446687.jpg',
      link: '/book/446687'
    },
    {
      serial: '04',
      title: 'শঙ্খচূড় দ্বিতীয় খণ্ড',
      author: 'সাদাত হোসাইন',
      rating: 13,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Shongkhochur_2nd_Part-Sadat_Hossain_-50269-443671.jpeg',
      link: '/book/443671'
    },
    {
      serial: '05',
      title: 'তুমি সন্ধ্যা অলকানন্দা',
      author: 'সাদাত হোসাইন',
      rating: 12,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Tumi_Sondhya_Alokananda-Sadat_Hossain_-ea6eb-451205.png',
      link: '/book/451205'
    }
  ];

  selectedCategory = '2';  // Default category
Math: any;

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    // Implement category filter logic here if needed
  }

  // Compute the stars based on the rating
  getStars(rating: number) {
    const fullStars = Math.floor(rating / 20); // Each full star represents 20 points.
    const halfStar = rating % 20 >= 10;
    const totalStars = [];

    for (let i = 0; i < 5; i++) {
      totalStars.push({
        full: i < fullStars || (i === fullStars && halfStar)
      });
    }

    return totalStars;
  }
}
