package com.example.etape1;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.PopupMenu;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class menuu extends AppCompatActivity implements PopupMenu.OnMenuItemClickListener {
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.menu);
    }
    public void showPopup(View v){
        PopupMenu popup= new PopupMenu(this, v);
        popup.setOnMenuItemClickListener(this);
        popup.inflate(R.menu.popup_menu);
        popup.show();
    }
    @Override
    public boolean onMenuItemClick(MenuItem item) {
        // Utilisez des instructions if-else pour traiter chaque option du menu individuellement
        if (item.getItemId() == R.id.item1) {
            Toast.makeText(this, "Ajouter un étudiant", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(menuu.this, ajouter.class);
            startActivity(intent);
            return true;
        } else if (item.getItemId() == R.id.item2) {
            Toast.makeText(this, "Ajouter absence", Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(menuu.this, AjouterAbsence.class);
            startActivity(intent);
            return true;
        } else if (item.getItemId() == R.id.item3) {
            Toast.makeText(this, "Item 3 clicked", Toast.LENGTH_SHORT).show();
            return true;
        } else {
            return false;

       }

}

}
