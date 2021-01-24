using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Participation_17
{
    public partial class MainPage : ContentPage
    {
        const int MAX_ROW = 5;
        const int MAX_COLUMN = 3;

        decimal[,] prices =
        {
            { 450m, 450m, 450m, 450m},
            { 425m, 425m, 425m, 425m},
            { 400m, 400m, 400m, 400m},
            { 375m, 375m, 375m, 375m},
            { 375m, 375m, 375m, 375m},
            { 350m, 350m, 350m, 350m}
        };
        public MainPage()
        {
            InitializeComponent();
            // used the following code to test that the prices array worked
            //LblResults.Text = prices[3, 2].ToString("c");
        }

        private void BtnDisplayPrice_Clicked(object sender, EventArgs e)
        {
            int row = -1, column = -1;

            if(GetRowValue(ref row) && GetColumnValue(ref column))
            DisplayResults(row,column);
        }

        private void DisplayResults(int row, int column)
        {
            LblResults.Text = $"Seat Price: {prices[row,column].ToString("c")}";
        }

        /// <summary>
        /// Grabs the value from entry row and validates the input then stores in int row.
        /// </summary>
        /// <param name="row"></param>
        /// <returns></returns>
        private bool GetRowValue(ref int row)
        {
            if (int.TryParse(EntryRow.Text, out row) 
                && row >= 0 
                && row <= MAX_ROW) return true;
            DisplayAlert("Invalid Input", "Please enter an integer for the row", "Close");
            return false;
        }

        /// <summary>
        /// Grabs the value from entry column and validates the input then stores in int column.
        /// </summary>
        /// <param name="column"></param>
        /// <returns></returns>
        private bool GetColumnValue(ref int column)
        {
            if (int.TryParse(EntryColumn.Text, out column) 
                && column >= 0 
                && column <= MAX_COLUMN) return true;
            DisplayAlert("Invalid Input", "Please enter an integer for the column", "Close");
            return false;
        }

        private void BtnMaxRevenue_Clicked(object sender, EventArgs e)
        {
            // alternate more efficient 
            // decimal total = prices.Cast<decimal>().Sum();

            decimal total = 0;

            for (int i = 0; i <= MAX_ROW; i++)
            {
                for (int j = 0; j <= MAX_COLUMN; j++)
                {
                    total += prices[i, j];
                }
            }

            DisplayAlert("Total Revenue", $"Total revenue is: {total.ToString("c")}","Close");
        }
    }
}
