using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
//Name: (Jacob Benge)
//Class: (INFO 1200)
//Section: (X01)
//Professor: (Jensen)
//Date: 08/29/2020 //Project #:Participation 2
//I declare that the source code contained in this assignment was written solely by me.
//I understand that copying any source code, in whole or in part, 
//constitutes cheating, and that I will receive a zero on this project
//if I am found in violation of this policy.

namespace JBLanguageTranslator
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        /// <summary>
        /// After BtnItalian is clicked, change LblTranslation text to "Buongiorno"
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnItalian_Clicked(object sender, EventArgs e)
        {
            LblTranslation.Text = "Buongiorno";
        }

        /// <summary>
        /// After BtnSpanish is clicked, change LblTranslation text to "Buenos Dias"
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnSpanish_Clicked(object sender, EventArgs e)
        {
            LblTranslation.Text = "Buenos Dias";
        }

        /// <summary>
        /// After BtnGerman is clicked, change LblTranslation text to "Guten Morgen"
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnGerman_Clicked(object sender, EventArgs e)
        {
            LblTranslation.Text = "Guten Morgen";
        }
    }
}
