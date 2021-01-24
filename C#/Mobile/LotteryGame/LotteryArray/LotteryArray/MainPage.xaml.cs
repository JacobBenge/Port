using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace LotteryArray
{
    public partial class MainPage : ContentPage
    {
        // create an array to store possible numbers
        const int MAX = 5;
        int[] lottoNumbersArray = new int[MAX];

        //If you need a list instead of array 
        //List<int> lottoList = new List<int>();

        Random rand = new Random();

        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnPlay_Clicked(object sender, EventArgs e)
        {
            // Generate Lotto Numbers
            GenerateRandomNumbers();
            // Update the labels to reflect generated lotto numbers.
            DisplayLottoNumbers();
            // If winner
            if ((int.Parse(EntryGuess1.Text) == lottoNumbersArray[0]) && (int.Parse(EntryGuess2.Text) == lottoNumbersArray[1]) && (int.Parse(EntryGuess3.Text) == lottoNumbersArray[2]) && (int.Parse(EntryGuess4.Text) == lottoNumbersArray[3]) && (int.Parse(EntryGuess5.Text) == lottoNumbersArray[4]))
            {
                // Display winning message
                DisplayAlert("Holy Crap", "You actually guessed it! Your chances were 1/243.", "Close");
            }
            // Else Loser
            else
            {
                // Display loser message
                DisplayAlert("Wrong, Try Again", "Your chances were 1/243. According to Lottery USA, the odds of winning the Mega Millions jackpot are 1 in 302.6 million and the odds of winning the Powerball jackpot are 1 in 292.2 million.", "Close");
            }   
        }

        /// <summary>
        /// Method to populate random numbers for the lottery game.
        /// </summary>
        private void GenerateRandomNumbers()
        {
            int count = 0;

            while (count < 5)
            {
                lottoNumbersArray[count] = rand.Next(1,4);
                count++;
            }
        }

        /// <summary>
        /// Update the labels to match generated lotto numbers.
        /// </summary>
        private void DisplayLottoNumbers()
        {
            lotto1.Text = lottoNumbersArray[0].ToString();
            lotto2.Text = lottoNumbersArray[1].ToString();
            lotto3.Text = lottoNumbersArray[2].ToString();
            lotto4.Text = lottoNumbersArray[3].ToString();
            lotto5.Text = lottoNumbersArray[4].ToString();
        }

        private void BtnReset_Clicked(object sender, EventArgs e)
        {
            // Reset Entries and Labels
            lotto1.Text = "0";
            lotto2.Text = "0";
            lotto3.Text = "0";
            lotto4.Text = "0";
            lotto5.Text = "0";
            EntryGuess1.Text = "";
            EntryGuess2.Text = "";
            EntryGuess3.Text = "";
            EntryGuess4.Text = "";
            EntryGuess5.Text = "";
        }
    }
}
