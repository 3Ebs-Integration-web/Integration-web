package com.example.etape1;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import java.util.HashMap;

public class etudiant extends AppCompatActivity {

    ListView L;
    String Nom, carte;
    HashMap<String, String> map;
    params p = new params();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.etud);

        L = findViewById(R.id.lst);

        // Récupérez le bouton dans le code
        Button btnCustom = findViewById(R.id.btnBack);

        // Configurez un OnClickListener pour le bouton
        btnCustom.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Répondez au clic du bouton ici
                // Par exemple, affichez un message Toast
               // Toast.makeText(etudiant.this, "Bouton personnalisé cliqué", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(etudiant.this, ajouter.class);
                startActivity(intent);
            }
        });

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            Nom = extras.getString("nom");
            carte = extras.getString("num");
            map = new HashMap<String, String>();
            map.put("nom", Nom);
            map.put("num", carte);
            p.values.add(map);
        }

        SimpleAdapter adapter = new SimpleAdapter(etudiant.this, p.values, R.layout.item,
                new String[]{"nom", "num"},
                new int[]{R.id.Nom, R.id.num}
        );
        L.setAdapter(adapter);
    }
}
